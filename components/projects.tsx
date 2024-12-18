"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [showAll, setShowAll] = useState(false);

  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsToShow.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {!showAll && (
     <div className="w-full text-center">  <button
     onClick={() => setShowAll(true)}
     className="mt-10 px-6 py-1.5 border text-white border-blue-700 rounded-lg text-base bg-blue-500 hover:bg-blue-600   font-medium "
   >
     Show all
   </button></div>
      )}
    </section>
  );
}
