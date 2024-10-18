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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
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
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-sm font-bold md:text-lg w-[42vw] text-center">
          Current works in progress.
        </p>
        <Accordion type="single" collapsible className="w-[30vw]">
          <AccordionItem value="item-1">
            <AccordionTrigger>MINK v2.0</AccordionTrigger>
            <AccordionContent>
              Update to MINK to include new features such as: TypeScript,
              TanStack, OAuth2.0, and UI/UX.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Kaggle Certificates</AccordionTrigger>
            <AccordionContent>
              Working on completing all Kaggle certificates, to master data
              analytics/science further.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Data Structures & Algorithms</AccordionTrigger>
            <AccordionContent>
              Review of data structures & algorithms.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Projects;
