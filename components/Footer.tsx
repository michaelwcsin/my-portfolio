import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="w-full text-center pb-2">
        <p className="font-bold md:text-[1vw] text-[4vw]">
          Reach out to connect with me!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center gap-10 md:gap-10">
          <a
            className="w-8 h-8"
            href="https://github.com/michaelwcsin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="git.svg" alt="Description of image" />
          </a>
          <a className="w-8 h-8" href="mailto:michael.wc.sin@gmail.com">
            <img src="/gmail.svg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mwsin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8"
              src="/linkedin.svg"
              alt="Description of image"
            />
          </a>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center pt-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Michael Sin
        </p>
      </div>
    </footer>
  );
};
