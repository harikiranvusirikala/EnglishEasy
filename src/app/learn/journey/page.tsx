import { Journey } from "@/components/learn/Journey";
import { course } from "@/content/course";
import { writtenDayIds } from "@/content/load";

export default function JourneyPage() {
  return <Journey course={course} written={writtenDayIds()} />;
}
