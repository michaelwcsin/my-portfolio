import { IconCloud } from "@/components/ui/IconCloud";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

// Icon Cloud (icons from SimpleIcon base)
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

const background = [
  {
    img: "/me_1.jpg",
  },
  {
    img: "/me_2.jpg",
  },
  {
    img: "/me_3.jpg",
  },
];

export const gridItems = [
  {
    id: 1,
    title: "Background",
    description: (
      <InfiniteMovingCards items={background} direction="left" speed="normal" />
    ),
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
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
    title: "",
    description:
      "I am a recent graduate with a Bachelor of Science in Computer Science and a minor in Mathematics. I am passionate about technology and its ability to transform visions, ideas, and data into products that positively impact society.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];
