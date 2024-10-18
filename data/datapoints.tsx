import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { VideoBadge } from "@/components/ui/video-badge";

// Icon Cloud (icons from SimpleIcon base)
export const iconGlobe = [
  "python",
  "r",
  "csharp",
  "c",
  "typescript",
  "javascript",
  "java",
  "kotlin",
  "mysql",
  "mongodb",
  "tableau",
  "react",
  "html5",
  "css3",
  "django",
  "pandas",
  "numpy",
  "npm",
  "tailwindcss",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vite",
  "git",
  "github",
  "gitlab",
  "rstudio",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "jupyter",
  "ubuntu",
  "windows",
  "mac",
];

// Data for projects
export const projectData = [
  {
    title: "Prospect ",
    description: [
      <a
        href="https://mwcsin.vercel.app/prospect_document_sm.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Badge>Open PDF</Badge>
      </a>,
      <Dialog>
        <DialogTrigger>
          <VideoBadge>Open Demo</VideoBadge>
        </DialogTrigger>
        <DialogContent>
          <video src="/prospect.mp4" controls autoPlay></video>
        </DialogContent>
      </Dialog>,
    ],
    content:
      "A full-stack web application that provides relevant data for home buyers/sellers in the Edmonton neighborhood. Please click on Open PDF for more info.",
    footer: [
      <Badge variant="outline">Python</Badge>,
      <Badge variant="outline">Django</Badge>,
      <Badge variant="outline">MySQL</Badge>,
      <Badge variant="outline">JavaScript</Badge>,
    ],
  },
  {
    title: "MINK ",
    description: [
      <a
        href="https://mwcsin.vercel.app/MINK_document.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Badge>Open PDF</Badge>
      </a>,
      <Dialog>
        <DialogTrigger>
          <VideoBadge>Open Demo</VideoBadge>
        </DialogTrigger>
        <DialogContent>
          <video src="/mink.mp4" controls autoPlay></video>
        </DialogContent>
      </Dialog>,
    ],
    content:
      "A full-stack food ordering web application using MERN tech stack. This web-application has full CRUD operations allowing customers to order food items, as well as restaurant managers to update their menu.",
    footer: [
      <Badge variant="outline">MongoDB</Badge>,
      <Badge variant="outline">Express</Badge>,
      <Badge variant="outline">React</Badge>,
      <Badge variant="outline">Node.js</Badge>,
    ],
  },
  {
    title: "Data Warehouse",
    description: (
      <Dialog>
        <DialogTrigger>
          <VideoBadge>Open Demo</VideoBadge>
        </DialogTrigger>
        <DialogContent>
          <video src="/data_warehouse.mp4" controls autoPlay></video>
        </DialogContent>
      </Dialog>
    ),
    content:
      "A desktop data warehouse containing information on students, professors, courses, etc. This project contains using stored procedures, views, as well as StringBuilder queries in order to create drill-down and roll-down operations.",
    footer: [
      <Badge variant="outline">MS SQL</Badge>,
      <Badge variant="outline">C#</Badge>,
    ],
  },
  {
    title: "Course Registration",
    description: (
      <Dialog>
        <DialogTrigger>
          <VideoBadge>Open Demo</VideoBadge>
        </DialogTrigger>
        <DialogContent>
          <video src="/course_registration.mp4" controls autoPlay></video>
        </DialogContent>
      </Dialog>
    ),
    content:
      "My very first simple full-stack application where students can register for courses. Features include updating students course database, as well as pop-up messages for duplicate classes and time conflicts.",
    footer: [
      <Badge variant="outline">MongoDB</Badge>,
      <Badge variant="outline">Express</Badge>,
      <Badge variant="outline">React</Badge>,
      <Badge variant="outline">Node.js</Badge>,
    ],
  },
  {
    title: "ShiftSage",
    description: "",
    content:
      "An Android mobile application using Kotlin that automates shift scheduling. Built in order to cut down the amount of time managers spend creating shift schedules. Demo coming soon.",
    footer: [
      <Badge variant="outline">Kotlin</Badge>,
      <Badge variant="outline">Android</Badge>,
      <Badge variant="outline">SQLite</Badge>,
    ],
  },
  {
    title: "Soccer Analytics",
    description: "",
    content:
      "Analytics about FIFA league and win percentage predictions using statistics of goals made during the first-half.",
    footer: [
      <Badge variant="outline">RStudio</Badge>,
      <Badge variant="outline">Jupyter</Badge>,
    ],
  },
  {
    title: "Blockbuster",
    description: (
      <Dialog>
        <DialogTrigger>
          <VideoBadge>Open Demo</VideoBadge>
        </DialogTrigger>
        <DialogContent>
          <video src="/blockbuster.mp4" controls autoPlay></video>
        </DialogContent>
      </Dialog>
    ),
    content:
      "Desktop application to rent movies. This application replicates closely the system that might've been used for Blockbusters, which creates/edits customers, details number of movie copies in-store, as well as checking out a film.",
    footer: [
      <Badge variant="outline">MS SQL</Badge>,
      <Badge variant="outline">C#</Badge>,
    ],
  },
];
