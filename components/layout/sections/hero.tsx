"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span>Redefining Fashion Shopping</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold space-y-4">
            <h1 className="flex flex-col">
              <div>
                Experience <span className="text-transparent px-2 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] bg-clip-text">
                  Fashion
                </span>
              </div>
              <div>
                In <span className="text-transparent px-2 bg-gradient-to-r from-[#FF69B4] to-[#FF1493] bg-clip-text">
                  Mixed Reality
                </span>
              </div>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Discover a new way to shop for sneakers and accessories with Glamr&apos;s immersive mixed reality platform. Try on products virtually, customize your style, and explore endless possibilities.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <a href="https://discord.gg/3qB2ddG3" target="_blank">
              <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                Join Waitlist
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
            </a>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center"
            src="/hero.png"
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
