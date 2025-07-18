import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { cn } from "@/lib/utils";
import React from "react";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>

        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

        <Spotlight className="scale-x-[-1] top-28 md:-top-20 left-80 h-screen" fill="white"/>

        <Spotlight className="scale-x-[-1] left-24 -top-40 md:-top-20 h-screen" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-[#000319]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",

            "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#000319]" />
      </div>

      <div className="justify-center flex relative my-20 z-10">
        <div className="max-w-[89vw] text-white md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-120">
            Aiming to solve complex problems with elegant solutions
          </h2>

          <TextGenerateEffect
            className="text-blue-900 text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Real World Applications"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ashutosh, a Full-Stack Developer based in Kolkata
          </p>

          <a href={"/resume.pdf"}>
            <MagicButton
              title="Show My Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
