import React from "react";
import { File, Folder, Tree } from "./ui/file-tree";

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Tree
          className="p-2 overflow-hidden rounded-md bg-background"
          initialSelectedId="7"
          initialExpandedItems={[
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
          ]}
          elements={ELEMENTS}
        >
          <Folder element="projects" value="1">
            <Folder value="2" element="prospect">
              <File value="3">
                <p>images.fig</p>
              </File>
              <File value="4">
                <p>document.pdf</p>
              </File>
            </Folder>
            <Folder value="5" element="mink">
              <Folder value="6" element="ui">
                <File value="7">
                  <p>images.fig</p>
                </File>
              </Folder>
              <File value="8">
                <p>header.tsx</p>
              </File>
              <File value="9">
                <p>footer.tsx</p>
              </File>
            </Folder>
            <Folder value="10" element="student_data_warehouse">
              <File value="11">
                <p>stored_procedures.sql</p>
              </File>
            </Folder>
          </Folder>
        </Tree>
      </div>
    </div>
  );
};

export default Projects;
