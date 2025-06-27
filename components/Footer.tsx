import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-white text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take
          <span className="text-purple-300"> your </span>
          digital presence to the next level?
        </h1>

        <p className="text-[#C1C2D3] md:mt-10 text-center my-5">
          Reach out to me today and let&apos;s discuss how I can help you achieve
          your goals.{" "}
        </p>

        <a href="mailto:ashutoshrajofficial@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal text-[#C1C2D3] font-light">
          © {new Date().getFullYear()} Ashutosh Raj. All rights reserved.
        </p>

        <div
          className="flex items-center
        md:gap-3 gap-6"
        >
          {socialMedia.map((profile) => (
            <a href={profile.link} key={profile.id}>
              <div
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[rgba(17, 25, 40, 0.75)] rounded-lg border border-[rgba(255, 255, 255, 0.125)]"
              >
                <img src={profile.img} width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
