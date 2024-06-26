"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  faChevronDown,
  faChevronRight,
  faHeart,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavbarMobile = () => {
  const pathname = usePathname();
  const splitedPathname = pathname.split("/");
  const [showCase, setShowCase] = useState(false);
  return (
    <main>
      <nav>
        <Card className="">
          <CardContent className="p-2">
            <div
              className={`flex flex-row p-3 justify-space-between ${
                pathname === "/" && "bg-amber-100"
              }`}
            >
              <div className="w-1/2">
                <Link href="/" legacyBehavior passHref>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold p-0">Home</span>
                    <span className="text-sm">Igho web homepage</span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`flex flex-row p-3 justify-space-between ${
                pathname === "/blog" && "bg-amber-100"
              }`}
            >
              <div className="w-full">
                <Link href="/blog" legacyBehavior passHref>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold p-0">Blog</span>
                    <span className="text-sm">
                      See my posts might inspire you
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`flex flex-row p-3 justify-space-between ${
                splitedPathname[1] === "showcase" && "bg-amber-100"
              }`}
            >
              <div className="w-1/2">
                <span>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold p-0">Showcase</span>
                    <span className="text-sm">Lemme a bit show off</span>
                  </div>
                </span>
              </div>
              <div className="w-1/2 text-end flex justify-end content-end item-center">
                <button
                  className="bg-transparent"
                  onClick={() => {
                    setShowCase(!!!showCase);
                  }}
                >
                  <FontAwesomeIcon
                    icon={!showCase ? faChevronRight : faChevronDown}
                    className="mt-4"
                  />
                </button>
              </div>
            </div>
            {/* Expand Showcase if it is being open */}
            {showCase && (
              <div className="mt-2">
                <Card>
                  <CardContent className="py-3">
                    <div className="w-full">
                      <Link href="/showcase/my-work" legacyBehavior passHref>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold p-0">
                            My Works
                          </span>
                          <span className="text-sm">{`I'll show you what I've done`}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="w-full mt-3">
                      <Link
                        href="/showcase/my-achievement"
                        legacyBehavior
                        passHref
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-bold p-0">
                            My Achievements
                          </span>
                          <span className="text-sm">{`My career achievements`}</span>
                        </div>
                      </Link>
                    </div>
                    <div className="w-full mt-3">
                      <Link href="/showcase/my-skill" legacyBehavior passHref>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold p-0">
                            My Skills
                          </span>
                          <span className="text-sm">{`My career achievements`}</span>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="flex mt-6 flex-row p-3 justify-space-between">
              <div className="w-full">
                <a href="https://saweria.co/igho" target="_blank">
                  <div className="flex flex-col">
                    <div className="flex">
                      <FontAwesomeIcon
                        icon={faMugHot}
                        className="mr-2 mt-[-9px] text-primary"
                        size="2x"
                      />
                      <span className="text-lg font-bold p-0">
                        Buy Me a Coffee
                      </span>
                    </div>
                    <span className="text-sm">
                      Just if what I share inspire you
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex mt-10 justify-center text-center item-center content-center">
              <span className="text-sm/[8px]">I built this website with</span>
              <FontAwesomeIcon
                icon={faHeart}
                className="text-pink-700 ml-2 mt-[-5px]"
                size="1x"
              />
              <span className="text-sm/[8px] ml-3">Feel free to use it</span>
            </div>
          </CardContent>
        </Card>
      </nav>
    </main>
  );
};

export default NavbarMobile;
