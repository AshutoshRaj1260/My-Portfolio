import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { Cover } from "./ui/cover";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="font-bold text-4xl md:text-5xl text-center text-white">
        A small selection of my{" "}
        <Cover>
          <span className="text-purple-300 cursor-crosshair"> Recent Projects</span>
        </Cover>
      </h1>

      <div className="flex flex-wrap justify-center items-center p-4 gap-x-24 gap-y-8 mt-10 text-white">
        {projects.map((project) => (
          <div
            key={project.id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center w-[80vw] sm:w-[570px]"
          >
            <PinContainer title="Visit" href={project.link}>
              <div className="relative flex items-center justify-center  w-[80vw] sm:w-[570px] overflow-hidden [h-30vh] sm:h-[40vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="z-10 absolute bottom-0 rotate-[10deg] top-20 rounded-2xl w-[86%]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {project.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>

              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center ">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-[#00031972] lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
