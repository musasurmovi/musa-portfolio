"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
<section
  id="skills"
  ref={ref}
  className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
>
  <SectionHeading>My skills</SectionHeading>
  <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
    {skillsData?.map((skill, index) => {
      const IconComponent = skill.icon; // Reference the icon component
      return (
        <motion.li
          className="flex items-center gap-2 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <IconComponent className={`w-6 h-6 ${skill.color}`} />
          {skill.name}
        </motion.li>
      );
    })}
  </ul>
</section>
  );
}
