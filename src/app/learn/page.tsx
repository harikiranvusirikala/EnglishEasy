import { Home } from "@/components/learn/Home";
import { course } from "@/content/course";
import { writtenDayIds } from "@/content/load";

export default function Learn() {
  return <Home course={course} written={writtenDayIds()} />;
}
