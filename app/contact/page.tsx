import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { MapLocation } from "@/components/map-location"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <main className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for inquiries about our vehicles or to schedule a viewing
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
          <div className="mt-16">
            <MapLocation />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

