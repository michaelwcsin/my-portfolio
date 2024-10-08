import { iconGlobe } from "@/data/datapoints";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { IconCloud } from "./ui/IconCloud";

interface FadeInProps {
  children: React.ReactNode;
}

function FadeIn({ children }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="w-[70vw] md:w-[55vw] ld:w-[55vw] flex flex-col md:flex-row">
        <div className="w-full md:w-[55vw] ld:w-[55vw] max-h-[60vh] overflow-y-hidden">
          <FadeIn>
            <h2 id="intro" className="font-extrabold text-[5vw] md:text-[40px]">
              Hello.
            </h2>
          </FadeIn>
          <FadeIn>
            <p className="text-[2.5vw] md:text-[0.9vw]">
              I am a recent graduate with a Bachelor of Science in Computer
              Science based in Canada. My passion lies in exploring various
              branches of technology, from research, data analysis, and
              development. I enjoy immersing myself in different areas,
              continually expanding my skill set and knowledge. You can see my
              current tech world to the right.
            </p>
          </FadeIn>
          <br></br>
          <FadeIn>
            <p className="font-bold text-sm md:text-xl">
              &quot;What we do in life,{" "}
              <span className="text-emerald-500">echoes in eternity...</span>
              &quot; -{" "}
              <span className="italic text-white">
                Maximus Decimus Meridius
              </span>
            </p>
          </FadeIn>
          <br></br>
          <FadeIn>
            <p className="text-[2.5vw] md:text-[0.9vw]">
              A quote that has always resonated deeply with me, and reflects the
              guiding principles of how I approach my work. With the rapid
              expansion of technology, our ability to shape the way we live,
              work, and connect with one another has transformed dramatically.
              This evolution empowers us to redefine possibilities, fostering
              innovation and creativity in every aspect of our lives.
            </p>
          </FadeIn>
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <FadeIn>
            <IconCloud iconSlugs={iconGlobe} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
