import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RateLesson } from "@/components/player/RateLesson";
import { FEEDBACK_KEY, parseFeedbackState } from "@/lib/feedback";
import { updateSettings } from "@/lib/settings-store";
import { FeedbackCard } from "./FeedbackCard";

const stored = () => parseFeedbackState(localStorage.getItem(FEEDBACK_KEY));

class FakeRecognition {
  lang = "";
  maxAlternatives = 0;
  continuous = false;
  interimResults = false;
  onresult: ((e: unknown) => void) | null = null;
  onerror: ((e: { error: string }) => void) | null = null;
  onend: (() => void) | null = null;
  static heard = "పాఠాలు బాగున్నాయి";
  static lastLang = "";
  start() {
    FakeRecognition.lastLang = this.lang;
    setTimeout(() => {
      this.onresult?.({ results: [[{ transcript: FakeRecognition.heard }]] });
      this.onend?.();
    }, 0);
  }
  stop() {}
  abort() {}
}

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ status: 200 }));
  updateSettings({ learnIn: "te", dismissed: ["mic-permission-help"] });
});
afterEach(() => vi.unstubAllGlobals());

describe("Settings → Send feedback", () => {
  it("sends a face and topics, then thanks until tomorrow", () => {
    render(<FeedbackCard />);
    const send = screen.getByRole("button", { name: /^Send/ }) as HTMLButtonElement;
    expect(send.disabled).toBe(true); // nothing chosen yet
    fireEvent.click(screen.getByRole("button", { name: /Love it/ }));
    fireEvent.click(screen.getByRole("button", { name: /Voice or sound/ }));
    fireEvent.click(screen.getByRole("button", { name: /More lessons/ }));
    fireEvent.click(screen.getByRole("button", { name: /More lessons/ })); // ticked off again
    expect(screen.getByRole("button", { name: /Voice or sound/ }).getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(send);
    expect(stored().queue).toMatchObject([{ kind: "app", rating: "love", topics: ["voice"], learnIn: "te" }]);
    expect(stored().queue[0]).not.toHaveProperty("said");
    expect(screen.getByRole("status").textContent).toMatch(/ధన్యవాదాలు/); // Telugu mode
    expect(screen.queryByRole("button", { name: /^Send/ })).toBeNull();
  });

  it("turns a spoken message into text in the app's language, shows it, and sends only the words", async () => {
    vi.stubGlobal("SpeechRecognition", FakeRecognition);
    render(<FeedbackCard />);
    fireEvent.click(screen.getByRole("button", { name: /Say it/ }));
    expect(await screen.findByTestId("feedback-said")).toHaveProperty("textContent", "పాఠాలు బాగున్నాయి");
    expect(FakeRecognition.lastLang).toBe("te-IN");
    fireEvent.click(screen.getByRole("button", { name: /^Send/ }));
    expect(stored().queue).toMatchObject([{ kind: "app", topics: [], said: "పాఠాలు బాగున్నాయి" }]);
  });

  it("shows no microphone where the phone can't listen", () => {
    render(<FeedbackCard />);
    expect(screen.queryByRole("button", { name: /Say it/ })).toBeNull();
    expect(screen.getByRole("button", { name: /Love it/ })).toBeTruthy();
  });
});

describe("Lesson complete → How was this lesson?", () => {
  it("rates once, thanks, and is gone on the next visit", async () => {
    updateSettings({ learnIn: "en" });
    const { unmount } = render(<RateLesson dayId="a-kilo-of" />);
    fireEvent.click(screen.getByRole("button", { name: "Too hard" }));
    expect(screen.getByRole("status").textContent).toMatch(/Thanks!/);
    expect((screen.getByRole("button", { name: "Easy" }) as HTMLButtonElement).disabled).toBe(true);
    expect(stored().rated).toEqual({ "a-kilo-of": "hard" });
    await act(async () => {});
    expect(fetch).toHaveBeenCalledWith("/api/feedback", expect.objectContaining({ method: "POST" }));
    unmount();
    render(<RateLesson dayId="a-kilo-of" />);
    expect(screen.queryByRole("button", { name: "Too hard" })).toBeNull();
  });
});
