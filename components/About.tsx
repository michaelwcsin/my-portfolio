import { gridItems } from "@/data/datapoints";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center"
    >
      <BentoGrid className="w-[60vw]">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;
