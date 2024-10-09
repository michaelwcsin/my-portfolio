import { Badge } from "@/components/ui/badge";

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
    title: "Prospect",
    description:
      "a full-stack web application that provides relevant data for home buyers/sellers in the Edmonton neighborhood.",
    content: (
      <img
        src="/prospect.svg"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "contain",
        }}
        alt="Prospect"
      />
    ),
    footer: [
      <Badge variant="outline">Python</Badge>,
      <Badge variant="outline">Django</Badge>,
      <Badge variant="outline">MySQL</Badge>,
      <Badge variant="outline">JavaScript</Badge>,
    ],
  },
  {
    title: "MINK",
    description: "a full-stack food ordering web application.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">MongoDO</Badge>,
      <Badge variant="outline">Express</Badge>,
      <Badge variant="outline">React</Badge>,
      <Badge variant="outline">Node.js</Badge>,
    ],
  },
  {
    title: "Student Data Warehouse",
    description:
      "a desktop data warehouse containing information on students, professors, courses, etc.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">MS SQL</Badge>,
      <Badge variant="outline">C#</Badge>,
    ],
  },
  {
    title: "Course Registration",
    description: "a web application in order to register for courses.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">MongoDB</Badge>,
      <Badge variant="outline">Express</Badge>,
      <Badge variant="outline">React</Badge>,
      <Badge variant="outline">Node.js</Badge>,
    ],
  },
  {
    title: "ShiftSage",
    description: "a kotlin mobile application that automates shift scheduling.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">Kotlin</Badge>,
      <Badge variant="outline">Android</Badge>,
      <Badge variant="outline">SQLite</Badge>,
    ],
  },
  {
    title: "Soccer Analytics",
    description: "analytics about FIFA league and win percentages.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">RStudio</Badge>,
      <Badge variant="outline">Jupyter</Badge>,
    ],
  },
  {
    title: "Blockbuster",
    description: "desktop application to rent movies.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">MS SQL</Badge>,
      <Badge variant="outline">C#</Badge>,
    ],
  },
  {
    title: "My First Portfolio",
    description: "my very first portfolio using html/css.",
    content: "To be updated.",
    footer: [
      <Badge variant="outline">HTML</Badge>,
      <Badge variant="outline">CSS</Badge>,
    ],
  },
];
