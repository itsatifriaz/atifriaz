"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import AICallout from "@/components/AICallout";
import Metrics from "@/components/Metrics";
import Work from "@/components/Work";
import Process from "@/components/Process";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import OpenSource from "@/components/OpenSource";
import BlogPosts from "@/components/BlogPosts";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Marquee />
        <AICallout />
        {/* <Metrics /> */}
        <Work />
        <Process />
        <About />
        <TechStack />
        <Timeline />
        <Testimonials />
        {/* <OpenSource />
        <BlogPosts /> */}
        <Now />
        <Contact />
      </main>
      <Footer />
      <AvailabilityBadge />
    </motion.div>
  );
}
