import React from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="conatiner mx-10 mt-12 flex flex-col space-y-6 sm:items-center sm:space-y-8 md:mx-auto md:mt-16 md:space-y-10 md:text-center">
          <div className="font-mono md:text-2xl">
            <span>
              Hi<span className="wave">👋🏻</span>, my name is
            </span>
          </div>
          <div>
            <h1 className="tracking-in-expand-fwd font-mono text-4xl font-extrabold md:text-7xl ">
              Ajit Rajesh Patil.
            </h1>
          </div>
          <div>
            <p className="tracking-in-expand-fwd font-mono text-2xl font-bold md:text-6xl">
              Web Developer.
            </p>
            <p className="tracking-in-expand-fwd font-mono text-2xl font-bold md:text-6xl">
              Freelancer.
            </p>
          </div>
          <div className="max-w-md font-mono tracking-wide sm:text-center md:text-xl">
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
