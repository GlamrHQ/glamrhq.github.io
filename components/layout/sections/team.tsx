import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import { FaInstagram } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/team/rushabh.png",
      firstName: "Rushabh",
      lastName: "Chalke",
      positions: ["Co-Founder", "Chief Executive Officer"],
      socialNetworks: [
        {
          name: "Instagram",
          url: "https://instagram.com/rushchalke",
        },
        {
          name: "X",
          url: "https://x.com/rushchalke",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rushabhchalke/",
        },
      ],
    },
    {
      imageUrl: "/team/saurabh.png",
      firstName: "Saurabh",
      lastName: "Chalke",
      positions: ["Co-Founder", "Chief Technology Officer"],
      socialNetworks: [
        {
          name: "Instagram",
          url: "https://instagram.com/saurabhchalke",
        },
        {
          name: "X",
          url: "https://x.com/saurabhchalke",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/saurabhchalke/",
        },
      ],
    },
  ];

  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Instagram":
        return <FaInstagram className="w-5 h-5" />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
