import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <footer>
        <div className="container mx-auto mt-5 p-5 pb-20 flex flex-col justify-center items-center text-Lightest-Slate space-y-3">
          <h4 className="text-lg font-mono">Build By - Ajit Patil</h4>
          <ul className="w-full flex justify-center gap-6 items-center">
            <li className="cursor-pointer hover:text-Green opacity-80">
              <Link href="mailto:patilajit020@gmail.com" target="_blank">
                <Icons.Mail size={25} className="m-auto " fontWeight={300} />
              </Link>
            </li>
            <li className="cursor-pointer hover:text-Green opacity-80">
              <Link
                title="Instagram"
                href="https://www.instagram.com/ajit__patil___/"
                target="_blank"
              >
                <Icons.Instagram
                  size={25}
                  className="m-auto "
                  fontWeight={300}
                />
              </Link>
            </li>
            <li className="cursor-pointer hover:text-Green opacity-80">
              <Link
                href="https://github.com/Ajitpatil92002"
                title="Instagram"
                target="_blank"
              >
                <Icons.Github size={25} className="m-auto " fontWeight={300} />
              </Link>
            </li>
            <li className="cursor-pointer hover:text-Green opacity-80">
              <Link
                href="https://www.linkedin.com/in/ajit-patil-9b600023b/"
                target="_blank"
                title="Instagram"
              >
                <Icons.Linkedin
                  size={25}
                  className="m-auto "
                  fontWeight={300}
                />
              </Link>
            </li>
            <li className="cursor-pointer hover:text-Green opacity-80">
              <Link href="tel:8971860300" title="Instagram" target="_blank">
                <Icons.Phone size={25} className="m-auto " fontWeight={300} />
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
