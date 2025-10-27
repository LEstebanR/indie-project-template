"use client";

import { Card } from "@/components/ui/card";
import { CircleAlert, CircleCheckBig } from "lucide-react";
import * as React from "react";

const PROBLEMS = [
  {
    description: "This is a smaller problem description.",
    fix: "This is a smaller problem fix.",
  },
  {
    description: "This is a smaller problem description.",
    fix: "This is a smaller problem fix.",
  },
  {
    description: "This is a smaller problem description.",
    fix: "This is a smaller problem fix.",
  },
  {
    description: "This is a smaller problem description.",
    fix: "This is a smaller problem fix.",
  },
];

function ProblemCard({
  description,
  fix,
}: {
  description: string;
  fix: string;
}) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className="relative w-full cursor-pointer"
      onClick={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((s) => !s);
      }}
      aria-pressed={flipped}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front Card (whole card flips) */}
        <Card
          className="w-full p-6 flex flex-col gap-4 items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-3 rounded-full bg-muted mb-2">
            <CircleAlert className="h-6 w-6 " />
          </div>
          <p className="text-center">{description}</p>
        </Card>

        {/* Back Card */}
        <Card
          className="absolute inset-0 w-full h-full p-6 flex flex-col gap-4 items-center border-secondary border-2 bg-black/80"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="p-3 rounded-full bg-green-100 mb-2">
            <CircleCheckBig className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-center text-white/80">{fix}</p>
        </Card>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <div
      id="problem"
      className="flex flex-col  items-center gap-6 md:w-8/12 px-2 md:px-0 py-16"
    >
      <h2 className="text-xl md:text-2xl text-secondary tracking-tight text-center">
        The Problem
      </h2>
      <p className="font-bold text-center text-4xl md:text-5xl">
        Sound familiar?{" "}
      </p>
      <p className="text-lg text-muted-foreground text-center  max-w-3xl leading-relaxed">
        Problem description goes here. Problem description goes here. Problem
        description goes here. Problem description goes here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
        {PROBLEMS.map((problem, index) => (
          <ProblemCard
            key={index}
            description={problem.description}
            fix={problem.fix}
          />
        ))}
      </div>
      <p className="text-md text-muted-foreground text-center uppercase tracking-tight">
        Tap a card to reveal how TaskIgnite flips the pattern
      </p>
    </div>
  );
}
