/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiSequelize,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [<SiJavascript />, <SiTypescript />],
      },
      {
        title: "FrontEnd",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "BackEnd",
        icons: [
          <FaNodeJs />,
          <SiExpress />,
          <SiFirebase />,
          <SiPostgresql />,
          <SiSequelize />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />],
      },
    ],
  },
  /*   {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  }, */
  {
    title: "experience",
    info: [
      {
        title: "Fullstack Web Developer - vitalFit",
        stage: "2023 - 2024",
      },
      {
        title: "Fullstack Web Developer - Dogkaholic",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "FullStack Web Development - SoyHenry, Argentina",
        stage: "2023 - 2024",
      },
    ],
  },
];

//components

import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full items-center bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <div className="container mx-auto flex h-full flex-col items-center gap-x-6 xl:flex-row">
        {/* text */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-6 hidden max-w-[500px] px-2 text-xs md:flex md:text-base xl:mx-0 xl:mb-12 xl:px-0"
          >
            6 years ago I was a graphic design student, but, being Venezuelan,
            the situation in the country forced me to leave the country and,
            consequently, abandon my degree. In the last year I made the
            decision to take that passion for art and transform it into web
            apps.
          </motion.p>
          {/* this is where goes the counters */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex h-[480px] w-full flex-col xl:w-[48%]"
        >
          <div className="mx-auto mb-4 flex gap-x-4  xl:mx-0 xl:gap-x-8">
            {aboutData.map(({ title }, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"}
                  relative cursor-pointer capitalize after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-8 after:bg-white  xl:text-lg`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {title}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-y-2 py-2 xl:items-start xl:gap-y-4 xl:py-6">
            {aboutData[index].info.map(({ title, stage, icons }, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex max-w-max flex-1 items-center gap-x-2 text-white/60 md:flex-row"
                >
                  {/* title */}
                  <div className="mb-2 font-light md:mb-0">{title}</div>
                  <div className="">-</div>
                  <div>{stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {icons?.map((icon, item) => {
                      return (
                        <div key={item} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

/*   {/* counters }
  <motion.div
  variants={fadeIn("right", 0.6)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="mx-auto mb-8 hidden md:flex md:max-w-xl
xl:mx-0 xl:max-w-none"
>
  <div className="flex flex-1 xl:gap-x-6">
    {/* experience }
    <div
      className="relative flex-1 after:absolute after:right-0 after:top-0
    after:h-full after:w-[1px] after:bg-white/10"
    >
      <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
        <CountUp start={0} end={10} duration={5} /> +
      </div>
      <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
        Years of experience
      </div>
    </div>
    {/* clients }
    <div
      className="relative flex-1 after:absolute after:right-0 after:top-0
    after:h-full after:w-[1px] after:bg-white/10"
    >
      <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
        <CountUp start={0} end={250} duration={5} /> +
      </div>
      <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
        Satisfied clients
      </div>
    </div>
    {/* projects }
    <div
      className="relative flex-1 after:absolute after:right-0 after:top-0
    after:h-full after:w-[1px] after:bg-white/10"
    >
      <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
        <CountUp start={0} end={650} duration={5} /> +
      </div>
      <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
        Finished projects
      </div>
    </div>
    {/* awards }
    <div className="relative flex-1 ">
      <div className="mb-2 text-2xl font-extrabold text-accent xl:text-4xl">
        <CountUp start={0} end={8} duration={5} /> +
      </div>
      <div className="max-w-[100px] text-xs uppercase leading-[1.4] tracking-[1px]">
        Winning awards
      </div>
    </div>
  </div>
</motion.div> */
