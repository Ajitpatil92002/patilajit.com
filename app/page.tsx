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
        <div className="mt-10 grid grid-cols-1 gap-3  md:grid-cols-prj md:p-14 ">
          {siteConfig.projects.map((prj, i) => {
            return (
              <>
                <div key={prj.Title} className="mb-[35px] flex h-full w-full flex-col rounded-md bg-popover px-[1.5rem]  pt-[2rem] opacity-90 shadow-md  duration-200 ease-out">
                  <div className="flex items-center justify-between">
                    <div className="text-Green cursor-pointer p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[40px] w-[40px]"
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
                            className="hover:text-Green h-[20px] w-[20px] cursor-pointer"
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
                            className="hover:text-Green h-[20px] w-[20px] cursor-pointer"
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
                    className="mt-3 flex flex-col justify-between  text-left"
                  >
                    <span className="hover:text-Green mb-4 flex font-mono text-3xl font-extrabold tracking-normal">
                      {prj.Title}
                    </span>
                    <p className="mt-2  opacity-90">{prj.Body}</p>
                    {prj.Category && (
                      <div className="space-x-1 space-y-1 py-4">
                        <span></span>
                        {prj.Category.map((category, i) => (
                          <span
                            key={i}
                            className="inline-block rounded p-1 text-xs   font-medium tracking-widest opacity-90"
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
