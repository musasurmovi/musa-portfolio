import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCss3Alt, FaGit, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/event.png";
import rmtdevImg from "@/public/calendar.jpg";
import wordanalyticsImg from "@/public/eng.png";

 


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Frontend Developer at True Meridian",
    location: "Islamaabad (Hybrid)",
    description:
      "Serving as a member of the software development team as a Senior Frontend Next.js/React.js Developer. Responsible for developing and maintaining frontend web applications using React.js and Next.js, leveraging Redux toolkit as a state management library.",
    // icon: React.createElement(LuGraduationCap),
    icon: React.createElement(CgWorkAlt),
    date: "March, 2024 - Present",
  },
  {
    title: "React Js Developer at Selteq Sol. Pvt ltd.",
    location: "Islamabad, Pakistan",
    description:
      "Served as a key member of software development team as a senior Fronted NEXT/REACT JS developer. Developing and maintaining frontend web application using React JS and Next JS, using redux as a state management libraty.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 - June 2023",
  },
  {
    title: "Frontend Developer at Dynamologic Pvt ltd.",
    location: "Remote islamabad",
    description:
      "Served as a front-end developer working remote. My stack includes React,  Redex, HTML, CSS.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2019 - April 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Axiom lab",
    companyName : "True Meridian",
    projectLink:  null,
    description:
      "Axiom is a role-specific decision support system that simplifies and de-risks project delivery. Through AI-powered project monitoring, proactive risk assessment, forecasting and scenario simulation, Axiom helps Owners, PMCs and General Contractors deliver on time and on budget, without compromising safety and quality.",
    tags: ["NEXT 14", "Typescript", "Tailwind CSS", "Redux Toolkit", "APEX Chart"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Expert",
    companyName : "Selteq Solutions Pvt. ltd.",
    projectLink: "http://expert.one",
    description:
      "Expert provides thousands of different services bookable via one app. It allows you to book almost any service you can think of, from electricians to beauticians and tradesmen.",
    tags: ["React", "Material UI", "Scss", "Storybook Components", "Redux"],
    imageUrl: rmtdevImg,
  },

  {
    title: "Roomy",
    companyName : "Dynamologic Solutions",
    projectLink: "https://roomy.pk/",
    description:
      "Roomy.pk is a user-friendly platform that simplifies the process of finding and booking residential or vacation properties. With a focus on premium accommodations and tailored features, it provides a seamless experience for users looking for comfort and convenience. Backed by reliable listings and exceptional customer service, Roomy.pk is dedicated to meeting diverse property needs efficiently",
    tags: ["React", "Material UI", "CSS", "Redux"],
    imageUrl: wordanalyticsImg,
  },
 
] as const;

// data/skillsData.ts
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiBootstrap, SiExpress } from "react-icons/si";

export const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-800 dark:text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  { name: "Git", icon: FaGithub , color: "text-orange-700" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Redux toolkit", icon: SiRedux, color: "text-purple-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-700 dark:text-white" },
];
