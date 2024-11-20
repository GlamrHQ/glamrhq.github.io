import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Glamr - Mixed Reality Fashion Platform",
  description: "Experience the future of fashion shopping with our innovative mixed reality platform",
  openGraph: {
    type: "website",
    url: "https://glamr.com",
    title: "Glamr - Mixed Reality Fashion Platform",
    description: "Experience the future of fashion shopping with our innovative mixed reality platform",
    images: [
      {
        url: "/glamr-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Glamr - Mixed Reality Fashion Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GlamrHQ",
    title: "Glamr - Mixed Reality Fashion Platform",
    description: "Experience the future of fashion shopping with our innovative mixed reality platform",
    images: ["/glamr-logo.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <SponsorsSection /> */}
      {/* <BenefitsSection /> */}
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      {/* <PricingSection /> */}
      {/* <ContactSection /> */}
      <FAQSection />
      <FooterSection />
    </>
  );
}
