import { Battery, Map, Radio, Smartphone, Sun, Wifi } from "lucide-react"

const features = [
  {
    icon: Sun,
    title: "Panoramic Sunroof",
    description: "Expansive glass roof with power sunshade",
  },
  {
    icon: Map,
    title: "Navigation System",
    description: "Built-in GPS with real-time traffic updates",
  },
  {
    icon: Smartphone,
    title: "Smartphone Integration",
    description: "Apple CarPlay and Android Auto compatibility",
  },
  {
    icon: Battery,
    title: "Hybrid Technology",
    description: "Efficient hybrid powertrain system",
  },
  {
    icon: Radio,
    title: "Premium Audio",
    description: "Harman Kardon surround sound system",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Hotspot",
    description: "Built-in 4G LTE Wi-Fi capability",
  },
]

export function VehicleFeatures() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Key Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4 p-4 rounded-lg border">
            <feature.icon className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

