"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" max-w-[45rem] text-center leading-8 sm:mb-20 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        A full stack developer with expertise in React JS, NextJS, JavaScript,
        NodeJs, HTML, Tailwind CSS, Bootstape, CSS, and SCSS. Experience working on a range of projects,
        from simple web pages to complex web applications, and have a track
        record of delivering quality work on time and within budget. Currently
        responsible for development and maintenance of multiple applications,
        working closely with designers and other developers for seamless user
        experiences. Skilled in problem-solving, a quick learner and motivated
        to improve skills. Believes in writing clean and maintainable code and
        familiar with industry best practices and standards.
      </p>
    </motion.section>
  );
}
