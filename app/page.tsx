import Hero from "@/components/Hero";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#000319] flex relative justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
