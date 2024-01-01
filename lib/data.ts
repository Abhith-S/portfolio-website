import React from "react";
import { SiHyperledger } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import signadoc from "@/public/sign-a-doc.png"
import block from "@/public/block.png";
import nft from "@/public/nft.png";

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
    title: "R&D Engineer (Ethereum)",
    company: "KBA",
    companyLink: "https://kba.ai",
    description:
      "Re-engineered the UI and backend of a blockchain backed digital signature software by transitioning from React.js to Next.js while enhancing the backend functionality and incorporating new features. Led a team of 4 in developing a crucial tender report for a significant government project",
    icon: React.createElement(FaEthereum),
    date: "November 2023 - Present",
  },
  {
    title: "Blockchain Developer",
    company: "KBA",
    companyLink: "https://kba.ai",
    description:
      "Led the development of a React-Native mobile app for an NFT Art Marketplace in Ethereum, alongside orchestrating complete Hyperledger Fabric blockchain deployment on Kubernetes. Conducted comprehensive training sessions on Dapp development for Ethereum and Hyperledger Fabric, overseeing the mentoring of teams in building full-stack applications. Additionally, conducted thorough research and analysis on various blockchain platforms and decentralized storage solutions.",
    icon: React.createElement(SiHyperledger),
    date: "September 2022 - September 2023"
  }
] as const;

export const projectsData = [
  {
    title: "Sign-a-Doc",
    description:
      "Revamped the UI of a blockchain-backed document digital signature software, transitioning from React.js to Next.js. This initiative included optimizing backend performance, integrating new functionalities, and enhancing the overall user experience.",
    tags: ["React", "Next.js", "Node.js", "MongoDB", "Bootstrap"],
    imageUrl: signadoc,
  },
  {
    title: "Blockchain Network with Kubernetes",
    description:
      "Implemented a blockchain network on Google Cloud with Kubernetes for an automobile consortium to ensure 90% uptime and continuous node monitoring. This deployment catered to the need for persistent data and always-available nodes, meeting the consortium's objectives effectively.",
    tags: ["Kubernetes", "Node.js", "Hyperledger Fabric", "GCP"],
    imageUrl: block,
  },
  {
    title: "NFT Marketplace Mobile App",
    description:
      "Designed a React Native app facilitating artists to sell physical paintings as NFTs, increasing onboarding speed by 70%. This innovation resolved image capture issues on the website, streamlining the artist registration process.",
    tags: ["React Native", "Solidity", "Ethereum"],
    imageUrl: nft,
  },
] as const;

export const blockchain = [
  "Ethereum", "Hyperledger Fabric",
  "Hardhat", "Truffle",
  "IPFS",
  "Ethers.js", "Web3.js"
]

export const frameworks = [
  "React.js", "Next.js",
  "Node.js", "Express.js"
]

export const mobile = ["React Native"]

export const languages = ["JavaScript", "TypeScript", "Solidity",]

export const database = ["MongoDB",]

export const tools = ["Docker", "Kubernetes", "GIT", "Google Cloud Platform (GCP)"]
