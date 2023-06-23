import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="conatiner md:mx-auto mt-12 md:mt-16 flex flex-col md:text-center mx-10 space-y-6 sm:space-y-8 md:space-y-10 sm:items-center">
          <div className="font-mono md:text-2xl">
            <span>
              Hi<span className="wave">👋🏻</span>, my name is
            </span>
          </div>
          <div>
            <h1 className="text-4xl md:text-7xl font-mono font-extrabold tracking-in-expand-fwd ">
              Ajit Rajesh Patil.
            </h1>
          </div>
          <div>
            <p className="text-2xl md:text-6xl font-mono font-bold tracking-in-expand-fwd">
              Web Developer.
            </p>
            <p className="text-2xl md:text-6xl font-mono font-bold tracking-in-expand-fwd">
              Freelancer.
            </p>
          </div>
          <div className="font-mono tracking-wide sm:text-center max-w-md md:text-xl">
            <h2>
              <b>Passionate</b> about Work,<b>Self-reliant</b>
              <br />
              and Always eager to learn new <b>Technologies</b> and develop new
              things based on it. !
            </h2>
          </div>
          <div className="space-x-4">
            <Link
              href="/"
              className={cn(buttonVariants({ size: "lg" }))}
              target="_blank"
            >
              Resume
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
