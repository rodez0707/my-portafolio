"use client";

import { useEffect, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
  direction?: "up" | "left" | "right" | "scale";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translateY(30px)",
    left: "translateX(-50px)",
    right: "translateX(50px)",
    scale: "scale(0.9)",
  };

  const visibleClasses = {
    up: "translateY(0)",
    left: "translateX(0)",
    right: "translateX(0)",
    scale: "scale(1)",
  };

  return (
    <div
      className={`animate-on-scroll ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: directionClasses[direction],
      }}
      data-visible-transform={visibleClasses[direction]}
    >
      {children}
    </div>
  );
}
