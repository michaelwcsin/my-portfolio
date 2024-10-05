import { IconCloud } from "@/components/ui/IconCloud";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

// Icon Cloud
const slugs = [
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
];

// Infinite Moving Cards
const techStack = [
  {
    img: "/language.svg",
  },
  {
    img: "/webdev.svg",
  },
  {
    img: "/data.svg",
  },
  {
    img: "/versioncontrol.svg",
  },
  {
    img: "/dbms.svg",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Background",
    description:
      "I am a recent graduate of Computer Science and have a passion for all things data & development. Outside of researching and learning new tools to develop my skill set, I love to exercise, fish, and golf.",
    className:
      "bg-red-400 lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "My tech stack",
    description: (
      // <InfiniteMovingCards items={techStack} direction="left" speed="normal" />
      <IconCloud iconSlugs={slugs} />
    ),
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Currently looking for new  and exciting opportunities!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];
