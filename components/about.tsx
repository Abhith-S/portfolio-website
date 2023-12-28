"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        I hold a <span className="font-medium underline">Bachelor's degree in <span className="font-bold">Computer Science and Engineering</span></span>, graduating in 2022. <br/><br/>My journey into the blockchain realm commenced at <Link href={"https://kba.ai/"} className="underline">KBA</Link> as a <span className="font-bold  underline">Blockchain Developer</span> intern in September 2022. During my tenure, I engaged in <span className="font-bold  ">Ethereum and Hyperledger Fabric</span> projects, gaining hands-on experience in both. I undertook various responsibilities, including crafting a <span className="font-bold  ">React-Native Mobile Application</span>  for the Ethereum team's <span className="font-bold  ">NFT Art Marketplace</span>, deploying a complete Hyperledger Fabric <span className="font-bold  ">blockchain network on the cloud using Kubernetes</span>, and training teams in Kubernetes, Docker, Dapp development for Ethereum and Hyperledger Fabric.

       <br/><br/> Continuing my growth, I transitioned to a full-time role as an <span className="font-bold underline">R&D Engineer (Ethereum)</span> at <Link href={"https://kba.ai/"} className="underline">KBA</Link> in November 2023. Here, I spearheaded the overhaul of the <span className="font-bold  ">UI and backend</span> of a document <span className="font-bold  ">digital signature software</span>, transitioning the UI from <span className="font-bold  ">React.js to Next.js</span>, optimizing the backend, and introducing new features. Moreover, I led a team in generating a comprehensive tender report for a notable <span className="font-bold  ">Government Blockchain project</span> and played an integral role in organizing the company's annual blockchain summit, contributing significantly to event management.
        
      </p>
    </motion.section>
  );
}
