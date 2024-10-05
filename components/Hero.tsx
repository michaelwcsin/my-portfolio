import { FaLocationArrow } from "react-icons/fa6";
import AboutButton from "./ui/Button";
import { BackgroundBeamsWithCollision } from "./ui/CollisionBeams";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { FlipWords } from "./ui/WordChange";

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
          <div className="text-center md:tracking-wider mt-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Michael Sin,
            <span className="inline-block min-w-[215px] text-left">
              {" "}
              <FlipWords
                words={["full-stack dev", "data enthusiast", "ui/ux fanatic"]}
              />
            </span>
          </div>
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
