import { Hero } from "@/components/views/home/hero";
import { Problem } from "@/components/views/home/problem";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <Hero />
      <Problem />
    </div>
  );
}
