"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "PowerBoyYT",
    userName: "Product Manager",
    comment:
      "Wow that’s so cool. I will definitely be checking it out when it comes out.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "24BitNoColor",
    userName: "Cybersecurity Analyst",
    comment:
      "But the overall idea and implementation is very dope and I would 100% use this if my shoe seller / brand of choice would over this. Like literally every time I buy shoes.",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "klonkish",
    userName: "Chief Technology Officer",
    comment:
      "The lacing part is impressive!",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "RuKo1998",
    userName: "Data Scientist",
    comment:
      "As a sneakerfan and VR user and enthusiast myself this is very cool!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Dweplays",
    userName: "IT Project Manager",
    comment:
      "Yes, just yes",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Users Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  {/* <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div> */}
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      {/* <CardDescription>{review.userName}</CardDescription> */}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
