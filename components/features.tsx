import { Car, Shield, Wallet, Clock, Tags } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Car,
      title: "Wide Vehicle Selection",
      description: "From compact cars to luxury models",
    },
    {
      icon: Shield,
      title: "Safety Assured Vehicles",
      description: "All vehicles undergo thorough inspection",
    },
    {
      icon: Wallet,
      title: "Bank Financing Available",
      description: "Flexible financing options available",
    },
    {
      icon: Clock,
      title: "Simple and Fast Process",
      description: "Quick and efficient process",
    },
    {
      icon: Tags,
      title: "Competitive Pricing",
      description: "Competitive pricing for all vehicles",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nexline?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for buying and selling vehicles in Ethiopia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
