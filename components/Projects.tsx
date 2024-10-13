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
import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <p className="text-sm font-bold md:text-lg w-[42vw] text-center">
        Under Construction.
      </p>
      <div className="w-[70vw] md:w-[60vw] flex justify-center pt-2">
        <Carousel opts={{ align: "start", loop: true }} className="max-w-3xl">
          <CarouselContent className="w-[50vw] md:w-[40vw]">
            {projectData.map((card, index) => (
              <CarouselItem key={index} className="sd:basis-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex aspect-square p-3">
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
