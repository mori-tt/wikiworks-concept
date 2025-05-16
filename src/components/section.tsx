"use client";

import { HTMLAttributes, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  id?: string;
  heading?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
}

export function Section({
  id,
  heading,
  description,
  children,
  className,
  contentClassName,
  ...props
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(heading || description) && (
          <div className="flex flex-col items-center text-center mb-10 md:mb-16 max-w-3xl mx-auto">
            {heading && (
              <h2
                className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
                  isVisible ? "animate-fadeIn" : "opacity-0"
                }`}
              >
                {heading}
              </h2>
            )}
            {description && (
              <p
                className={`text-muted-foreground text-lg ${
                  isVisible ? "animate-fadeIn animate-delay-100" : "opacity-0"
                }`}
              >
                {description}
              </p>
            )}
            {heading && (
              <div className="mt-4 h-1 w-20 bg-primary rounded-full"></div>
            )}
          </div>
        )}
        <div
          className={cn(
            "",
            contentClassName,
            isVisible ? "animate-fadeIn animate-delay-200" : "opacity-0"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
