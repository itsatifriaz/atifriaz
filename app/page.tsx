"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AICallout from "@/components/AICallout";
import Work from "@/components/Work";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <AICallout />
        <Work />
        <About />
        <TechStack />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
