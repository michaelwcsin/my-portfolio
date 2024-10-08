"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/data/datapoints";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <p className="text-lg font-bold">
        Under Construction - For a live demo or more info please just contact
        me.
      </p>
      <div className="w-[60vw] flex justify-center pt-5">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{ align: "start", loop: true }}
          className="max-w-3xl"
        >
          <CarouselContent className="w-[40vw]">
            {projectData.map((card, index) => (
              <CarouselItem key={index} className="sd:basis-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      {card.content}
                    </CardContent>
                    <CardFooter>{card.footer}</CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
