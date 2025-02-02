import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Car?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Our team of automotive experts is here to help you find the perfect vehicle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact" className="gap-2">
              <Mail className="w-4 h-4" />
              Send Message
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

