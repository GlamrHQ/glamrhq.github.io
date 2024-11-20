import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "MR Try-On Stations",
    description: "Visit our partnered retail outlets to experience Glamr's platform firsthand.",
  },
  {
    title: "3D Asset Creation",
    description: "We help retailers digitize their inventory with high-quality 3D models.",
  },
  {
    title: "Retail Analytics",
    description: "Provide retailers with valuable analytics on user preferences and behaviors.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Mixed Reality Fashion Platform
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Experience the future of fashion retail with our innovative mixed reality solutions
      </h3>
      <br />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <br />
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
