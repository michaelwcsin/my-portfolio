"use client";

import About from "@/components/About";
import { Footer } from "@/components/Footer";
import Introduction from "@/components/Hero";
import { TracingBeam } from "@/components/ui/TracingBeam";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <TracingBeam>
        <div className="w-full">
          <Introduction />
          <About />
          <Footer />
        </div>
      </TracingBeam>
    </main>
  );
}
