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
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building this portfolio.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's collaborate!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
