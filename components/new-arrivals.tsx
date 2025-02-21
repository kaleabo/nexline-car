"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fuel, Calendar, Gauge, Battery, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface VehicleSpecs {
  range?: string
  battery?: string
}

interface VehiclePrice {
  cash: string
  bank: string
}

interface Vehicle {
  id: number
  name: string
  image: string
  price: VehiclePrice
  features: string[]
  year: string
  mileage: string
  fuelType: string
  specs: VehicleSpecs
}

export function NewArrivals() {
  const vehicles = [
    {
      id: 1,
      name: "2024 BYD Yuan Up",
      image: "/cars/c-1.jpg",
      price: {
        cash: "ETB 2,350,000",
        bank: "ETB 2,350,000",
        total: "ETB 4,700,000",
      },
      features: ["EV", "Panoramic Sunroof", "Full Option"],
      year: "2024",
      mileage: "0",
      fuelType: "Electric",
      specs: {
        range: "410km",
        transmission: "Automatic",
        condition: "Brand New",
      },
    },
    {
      id: 2,
      name: "2023 Toyota BZ4X 2WD",
      image: "/cars/c-2.jpg",
      price: {
        cash: "ETB 3,500,000",
        bank: "ETB 2,550,000",
        total: "ETB 6,050,000",
      },
      features: ["Navigation", "JBL Sound", "360° Camera"],
      year: "2023",
      mileage: "0",
      fuelType: "Electric",
      specs: {
        range: "550km",
        power: "160KW 214HP",
        battery: "66.7KWh",
      },
    },
    {
      id: 3,
      name: "2024 BYD e2 Flying",
      image: "/cars/c-3.jpg",
      price: {
        cash: "ETB 1,950,000",
        bank: "ETB 1,950,000",
        total: "ETB 3,900,000",
      },
      features: ["Electric", "Navigation", "Leather Seats"],
      year: "2024",
      mileage: "0",
      fuelType: "Electric",
      specs: {
        range: "405km",
        battery: "38.88KWh",
        power: "55KW 74HP",
      },
    },
    {
      id: 4,
      name: "2024 Toyota Highlander Hybrid",
      image: "/cars/c-4.jpg",
      price: {
        cash: "ETB 7,500,000",
        bank: "ETB 7,500,000",
        total: "ETB 15,000,000",
      },
      features: ["Hybrid", "7 Seats", "360° Camera"],
      year: "2024",
      mileage: "0",
      fuelType: "Hybrid",
      specs: {
        engine: "2.5L Hybrid",
        transmission: "Automatic",
        efficiency: "17km/L",
      },
    },
  ]
  return (
    <section>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card 
              key={vehicle.id} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-primary/10"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="destructive" 
                      className="bg-gradient-to-r from-primary to-primary/80 border-none shadow-lg"
                    >
                      New Arrival
                    </Badge>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="mb-4 space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {vehicle.name}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-lg font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        Cash: {vehicle.price.cash}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Bank: {vehicle.price.bank}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.map((feature) => (
                      <Badge 
                        key={feature} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 group/item">
                      <Calendar className="h-4 w-4 group-hover/item:text-primary transition-colors" />
                      <span className="group-hover/item:text-primary transition-colors">
                        {vehicle.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group/item">
                      <Gauge className="h-4 w-4 group-hover/item:text-primary transition-colors" />
                      <span className="group-hover/item:text-primary transition-colors">
                        {vehicle.mileage} km
                      </span>
                    </div>
                    <div className="flex items-center gap-2 group/item">
                      {vehicle.fuelType === "Electric" ? (
                        <>
                          <Zap className="h-4 w-4 group-hover/item:text-primary transition-colors" />
                          <span className="group-hover/item:text-primary transition-colors">
                            {vehicle.specs.range}
                          </span>
                        </>
                      ) : (
                        <>
                          <Fuel className="h-4 w-4 group-hover/item:text-primary transition-colors" />
                          <span className="group-hover/item:text-primary transition-colors">
                            {vehicle.fuelType}
                          </span>
                        </>
                      )}
                    </div>
                    {vehicle.specs.battery && (
                      <div className="flex items-center gap-2 group/item">
                        <Battery className="h-4 w-4 group-hover/item:text-primary transition-colors" />
                        <span className="group-hover/item:text-primary transition-colors">
                          {vehicle.specs.battery}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg" 
                  asChild
                >
                  <Link href={`/vehicles/${vehicle.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}