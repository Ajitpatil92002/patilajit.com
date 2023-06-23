import { siteConfig } from "@/config/site";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col mx-auto p-5 md:p-24 mt-20">
          <h4 className="flex text-5xl text-center font-mono font-extrabold  tracking-wide p-3 ">
            About Me
          </h4>
          <div className="flex flex-col justify-between mb-5 md:space-x-6 md:flex-row items-start">
            <div className=" space-y-3 pt-6 md:w-1/2 text-base tracking-wide text-[0.9rem] md:text-base md:tracking-wider">
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
                <ul className="grid grid-rows-5 grid-flow-col gap-2 text-xs md:grid-rows-3">
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
                className="rounded-lg object-cover h-[600px] w-auto"
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
