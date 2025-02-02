import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Gauge, Phone, Zap, Battery, Info } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function VehicleDetails() {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-3xl font-bold">2024 BYD Yuan Up</h1>
          <Badge variant="destructive" className="bg-primary">
            New Arrival
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">Cash: ETB 2,350,000</div>
          <div className="text-lg text-muted-foreground">Bank: ETB 2,350,000</div>
          <div className="text-sm text-muted-foreground">Total: ETB 4,700,000 (Negotiable)</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">2024</span>
        </div>
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">0 km</span>
        </div>
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">410km Range</span>
        </div>
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Electric</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge>Full-Option</Badge>
        <Badge>Panoramic Sunroof</Badge>
        <Badge>Normal Charger</Badge>
        <Badge>Fast Charger</Badge>
        <Badge>Brand New</Badge>
      </div>

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Info className="h-4 w-4" />
              Required Documents
            </div>
            <ul className="space-y-2 text-sm">
              <li>1. Valid Business License</li>
              <li>2. Tax Clearance</li>
              <li>3. Verified Bank Statement</li>
              <li>4. Marriage/Single Certificate</li>
              <li>5. Valid ID</li>
              <li>6. Financial Statement</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          0911260700
        </Button>
        <Button size="lg" variant="outline" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          0911593030
        </Button>
      </div>
    </div>
  )
}

