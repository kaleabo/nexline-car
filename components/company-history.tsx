import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function CompanyHistory() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Our Journey</h2>
        <div className="space-y-4">
          <p>
            Founded in 2010, Nexline Business Group has grown to become one of Ethiopia's leading automotive
            dealerships. Our commitment to excellence and customer satisfaction has helped us build a strong reputation
            in the industry.
          </p>
          <p>
            Over the years, we have established strong partnerships with major automotive manufacturers and financial
            institutions, enabling us to offer our customers the best vehicles and financing options available in the
            market.
          </p>
          <p>
            Today, we are proud to be at the forefront of Ethiopia's automotive industry, introducing electric and
            hybrid vehicles to meet the growing demand for sustainable transportation solutions.
          </p>
        </div>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="relative aspect-[4/3]">
            <Image src="/placeholder.svg" alt="Nexline showroom" fill className="object-cover rounded-lg" />
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

