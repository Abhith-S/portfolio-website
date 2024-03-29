"use client";

import React from "react";
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

const SkillComponent = ({title,data}:{title:string,data:string[]})=>{
    const { ref } = useSectionInView("Skills");

    return <section
    id="skills"
    ref={ref}
    className="mb-16 max-w-[53rem] scroll-mt-28 text-center sm:mb-16"
  >
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>
    <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      {data.map((data, index) => (
        <motion.li
          className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 "
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          {data}
        </motion.li>
      ))}
    </ul>
  </section>
}

export default SkillComponent;