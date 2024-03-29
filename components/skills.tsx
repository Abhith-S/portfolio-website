"use client";

import React from "react";

//components imports
import SectionHeading from "./section-heading";
import SkillComponent from "./SkillComponent";

//data import
import { blockchain, others, frameworks, languages } from "@/lib/data";

//hooks import
import { useSectionInView } from "@/lib/hooks";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <div className="mb-28 mt-20" ref={ref}>

      <SectionHeading><p className="mb-16 ">My Skills</p></SectionHeading>
      <div className="mb-8"></div>

      <SkillComponent title={"Programming Languages"} data={languages} />
      <SkillComponent title={"Frameworks"} data={frameworks} />
      <SkillComponent title={"Blockchain"} data={blockchain} />
      <SkillComponent title={"Others"} data={others} />

    </div>
  );
}
