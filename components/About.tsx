import { siteConfig } from "@/config/site";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-20 flex flex-col p-5 md:p-24">
          <h4 className="flex p-3 text-center font-mono text-5xl  font-extrabold tracking-wide ">
            About Me
          </h4>
          <div className="mb-5 flex flex-col items-start justify-between md:flex-row md:space-x-6">
            <div className="space-y-3 pt-6 text-base tracking-wide md:w-1/2 md:text-base md:tracking-wider">
              {siteConfig.about.map((p, i) => {
                return (
                  <p key={i} className="leading-loose">
                    {p}
                  </p>
                );
              })}
              <div>
                <h3 className="mb-5 text-lg ">
                  Here are a few technologies
                  <span className="animate-pulse text-lg">❤️</span> I’ve been
                  working with recently :
                </h3>
                <ul className="grid grid-flow-col grid-rows-5 gap-2 text-xs md:grid-rows-3">
                  {siteConfig.technologies.map((tech, i) => {
                    return (
                      <li key={i}>
                        <span className="font-bold">▹</span>
                        <span className="">{tech}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="m-0 mt-4 md:mt-0 md:w-1/2">
              <Image
                src={"/images/Ajit_Patil.jpg"}
                className="h-[600px] w-auto rounded-lg object-cover"
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
