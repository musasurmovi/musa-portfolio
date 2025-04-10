
"use client";

import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import React from "react";

export default function Education() {
      const { ref } = useSectionInView("Experience");
      const { theme } = useTheme();
  return (
    <section id="education" ref={ref} className="scroll-mt-28 my-14">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
          <p className="text-sm text-gray-500">FAST National University of Computer & Emerging Science
            {/* • 2018 – 2022 */}

          </p>
          <p className="mt-2 text-gray-700">
            Graduated with honors. Focused on software engineering, web development, and data structures & algorithms.
          </p>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Intermediate in Pre Engineering</h3>
          <p className="text-sm text-gray-500">F.G Boys Degree College Skardu
             {/* • 2016 – 2018 */}
             </p>
          <p className="mt-2 text-gray-700">
            Specialized in Science and Mathematics.
          </p>
        </div>
      </div>
    </section>
  );
}
