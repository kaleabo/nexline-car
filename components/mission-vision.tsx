import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb } from "lucide-react"

export function MissionVision() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Our Mission
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To provide Ethiopian customers with high-quality vehicles and exceptional service, making the car-buying
            experience transparent, convenient, and satisfying. We strive to be the most trusted automotive partner in
            the country.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Our Vision
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To be the leading automotive dealership in Ethiopia, pioneering the adoption of sustainable vehicles and
            setting new standards for customer service excellence in the automotive industry.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

