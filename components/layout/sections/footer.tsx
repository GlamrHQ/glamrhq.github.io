import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaXTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const FooterSection = () => {
  const socialLinks: SocialLink[] = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://instagram.com/GlamrHQ",
      label: "Instagram",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      href: "https://youtube.com/@GlamrHQ",
      label: "YouTube",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://x.com/GlamrHQ",
      label: "X (Twitter)",
    },
    {
      icon: <FaDiscord className="w-6 h-6" />,
      href: "https://discord.gg/3qB2ddG3",
      label: "Discord",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/company/GlamrHQ",
      label: "LinkedIn",
    },
  ];

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col items-center gap-8">
          <Link href="#" className="flex font-bold items-center">
            <Image
              src="/glamr-logo.jpg"
              alt="Glamr Logo"
              width={36}
              height={36}
              className="mr-2 rounded-lg"
            />
            <h3 className="text-2xl">Glamr</h3>
          </Link>

          <div className="flex gap-6 items-center">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>

          <Separator className="w-full" />
          
          <div className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Glamr. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
