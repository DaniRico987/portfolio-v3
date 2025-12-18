import type { ReactNode } from "react";

import { cn } from "../../utils/cn"; // I'll need to create this utility or just inline it if simple

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  centered?: boolean;
}

export function Section({
  id,
  className,
  children,
  centered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        centered && "flex flex-col justify-center min-h-[60vh]",
        className
      )}
    >
      <div className="container-width">{children}</div>
    </section>
  );
}
