import { Phone, BellIcon as BrandTelegram, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <Phone className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-medium">Phone Numbers</p>
              <p className="text-sm text-muted-foreground">+251 911 260 700</p>
              <p className="text-sm text-muted-foreground">+251 911 593 030</p>
            </div>
          </div>
          <div className="flex gap-3">
            <BrandTelegram className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-medium">Join Our Telegram Channel</p>
              <a
                href="https://t.me/NexlineBusinesGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                @NexlineBusinesGroup
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary shrink-0" />
            <div>
              <p className="font-medium">Visit Our Showroom</p>
              {/* <p className="text-sm text-muted-foreground">Bole Road, Next to Millennium Hall</p> */}
              <p className="text-sm text-muted-foreground">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sell Your Vehicle</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Looking to sell your vehicle? We offer competitive prices and a hassle-free process.
          </p>
          <Button className="w-full" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

