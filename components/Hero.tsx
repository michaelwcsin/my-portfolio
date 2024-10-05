import { FaLocationArrow } from "react-icons/fa6";
import AboutButton from "./ui/Button";
import { BackgroundBeamsWithCollision } from "./ui/CollisionBeams";
import { TextGenerateEffect } from "./ui/TextGenerate";

const Hero = () => {
  return (
    <div className="flex justify-center relative z-10">
      <BackgroundBeamsWithCollision>
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my portfolio!
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center"
          />
          <p className="text-center md:tracking-wider mt-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m <span className="text-emerald-500">Michael Sin</span>,
            a developer based in Canada.
          </p>
          <a href="#about">
            <AboutButton
              title="About me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
