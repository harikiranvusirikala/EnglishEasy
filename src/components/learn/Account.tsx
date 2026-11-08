"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { Dialog } from "@/components/ui/Dialog";
import { Skeleton } from "@/components/ui/Skeleton";
import { button } from "@/components/ui/button";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { signInErrorKind, type AccountState, type SignInErrorKind } from "@/learning/account";
import { useAccount } from "@/lib/account";
import { authClient } from "@/lib/auth-client";
import { strings } from "@/lib/strings";

const ERROR_LABEL: Record<SignInErrorKind, typeof strings.signInOther> = {
  cancelled: strings.signInCancelled,
  emailNotVerified: strings.signInEmailNotVerified,
  other: strings.signInOther,
};

/** Google's "G", in its own colours, as Google's button template draws it. */
function GoogleLogo() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 48 48" className="shrink-0">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/** A plain message after a failed sign-in (`?error=` from Better Auth). Needs a <Suspense> around it. */
function SignInError() {
  const kind = signInErrorKind(useSearchParams()?.get("error"));
  if (!kind) return null;
  return (
    <p role="alert" className="text-base text-danger">
      <BiText text={ERROR_LABEL[kind]} />
    </p>
  );
}

/** Google's "Sign in with Google" button (its branding guidelines): the standard G, white with a grey outline by day, Google's dark theme at night. Don't restyle it like the app's buttons. */
export function GoogleButton({ onFailed, returnTo }: { onFailed: () => void; returnTo?: string }) {
  const [pending, setPending] = useState(false);
  async function signIn() {
    setPending(true);
    const back = returnTo ?? window.location.pathname;
    const { error } = await authClient.signIn.social({ provider: "google", callbackURL: back, errorCallbackURL: "/learn/settings" });
    if (error) {
      setPending(false);
      onFailed();
    }
    // On success the browser is already on its way to Google.
  }
  return (
    <button
      type="button"
      onClick={signIn}
      disabled={pending}
      className="flex min-h-13 items-center justify-center gap-2.5 self-start rounded-full border border-[#747775] bg-surface px-4 text-base font-medium tracking-[0.25px] text-[#1f1f1f] outline-none transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-60 dark:border-[#8e918f] dark:bg-[#131314] dark:text-[#e3e3e3]"
    >
      <GoogleLogo />
      {/* Google's wording is fixed; the Telugu meaning goes below in Telugu mode */}
      <Bi label={pending ? strings.signInOpening : strings.signInGoogle} className="items-start" />
    </button>
  );
}

function SignOut() {
  const [asking, setAsking] = useState(false);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState(false);
  async function confirm() {
    setBusy(true);
    setFailed(false);
    const { error } = await authClient.signOut();
    setBusy(false);
    if (error) setFailed(true);
    else setAsking(false);
  }
  return (
    <>
      <button type="button" onClick={() => setAsking(true)} className={button("secondary")}>
        <Bi label={strings.signOut} />
      </button>
      <Dialog open={asking} onClose={() => setAsking(false)} title={strings.signOutAsk.en}>
        <div className="flex flex-col gap-4">
          <p className={cardText}>
            <BiText text={strings.signOutBody} />
          </p>
          {failed && (
            <p role="alert" className="text-base text-danger">
              <BiText text={strings.signOutFailed} />
            </p>
          )}
          <button type="button" onClick={confirm} disabled={busy} className={button("danger")}>
            <Bi label={strings.signOut} />
          </button>
          <button type="button" onClick={() => setAsking(false)} className={button("secondary")}>
            <Bi label={strings.signOutKeep} />
          </button>
        </div>
      </Dialog>
    </>
  );
}

/** Settings → Account for a given state (pure view, so every state is testable). */
export function AccountView({ state }: { state: AccountState }) {
  const [failed, setFailed] = useState(false);
  if (state.kind === "loading") return <Skeleton className="h-32" />;
  return (
    <section className={`${card} flex flex-col gap-3`}>
      <h2 className={cardTitle}>
        <Bi label={strings.account} className="items-start" />
      </h2>
      {state.kind === "signedOut" ? (
        <>
          <p className={cardText}>
            <BiText text={strings.accountHint} />
          </p>
          <Suspense fallback={null}>
            <SignInError />
          </Suspense>
          {failed && (
            <p role="alert" className="text-base text-danger">
              <BiText text={strings.signInFailed} />
            </p>
          )}
          <GoogleButton onFailed={() => setFailed(true)} />
        </>
      ) : (
        <>
          <div className="flex items-center gap-3">
            {state.image ? (
              // eslint-disable-next-line @next/next/no-img-element -- Google's photo, small and already sized
              <img src={state.image} alt={strings.accountPhotoAlt.en} width={48} height={48} referrerPolicy="no-referrer" className="size-12 shrink-0 rounded-full" />
            ) : (
              <span aria-hidden="true" className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-fill text-xl font-bold text-on-brand">
                {state.name.slice(0, 1).toUpperCase()}
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-lg font-semibold">{state.name}</p>
              <p className="truncate text-base text-ink-2">{state.email}</p>
            </div>
          </div>
          <p className={cardText}>
            <BiText text={strings.accountSignedInHint} />
          </p>
          <SignOut />
        </>
      )}
    </section>
  );
}

export function Account() {
  return <AccountView state={useAccount()} />;
}
