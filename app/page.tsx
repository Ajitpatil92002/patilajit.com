import AboutSection from "@/components/About";
import Hero from "@/components/hero";
import { siteConfig } from "@/config/site";

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <section
        id="projects"
        className="container space-y-6  py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Some Things I’ve Built
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-prj  md:p-14 mt-10 ">
          {siteConfig.projects.map((prj, i) => {
            return (
              <>
                <div className="flex flex-col h-full w-full bg-popover rounded-md shadow-md opacity-90  mb-[35px] pt-[2rem] px-[1.5rem]  ease-out duration-200">
                  <div className="flex justify-between items-center">
                    <div className="text-Green p-3 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-[40px] h-[40px]"
                      >
                        <title>Folder</title>
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <div className=" flex space-x-2 p-3">
                      {prj.GithubLink && (
                        <a href={prj.GithubLink} title="github" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[20px] h-[20px] hover:text-Green cursor-pointer"
                          >
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      {prj.webLink && (
                        <a href={prj.webLink} title="weblink" target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-[20px] h-[20px] hover:text-Green cursor-pointer"
                          >
                            <title>External Link</title>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    id="prj1"
                    className="flex flex-col justify-between text-left  mt-3"
                  >
                    <span className="flex text-3xl font-mono font-extrabold tracking-normal mb-4 hover:text-Green">
                      {prj.Title}
                    </span>
                    <p className="opacity-90  mt-2">{prj.Body}</p>
                    {prj.Category && (
                      <div className="space-x-1 space-y-1 py-4">
                        <span></span>
                        {prj.Category.map((category, i) => (
                          <span
                            key={i}
                            className="opacity-90 inline-block py-1 px-1 rounded   text-xs font-medium tracking-widest"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
