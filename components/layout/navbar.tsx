"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/glamr#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#team",
    label: "Team",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Image
          src={getImagePath("/glamr-logo.jpg")}
          alt="Glamr Logo"
          width={36}
          height={36}
          className="mr-2 rounded-lg"
        />
        Glamr
      </Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src={getImagePath("/glamr-logo.jpg")}
                      alt="Glamr Logo"
                      width={36}
                      height={36}
                      className="mr-2 rounded-lg"
                    />
                    Glamr
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <div className="hidden lg:flex items-center gap-6 mx-auto">
        {routeList.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-base hover:text-primary transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="Visit our Instagram">
          <Link
            aria-label="Visit our Instagram"
            href="https://instagram.com/GlamrHQ"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
