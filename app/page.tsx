import { Button } from "@/components/ui/button"
import { Features } from "@/components/features"
import { NewArrivals } from "@/components/new-arrivals"
import { ContactCTA } from "@/components/contact-cta"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <main>
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video autoPlay muted loop className="w-full h-full object-cover" poster="/car-hero-poster.jpg">
              <source src="/car-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Looking to Buy or Sell a Car?</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Nexline helps you find the car you want quickly and at competitive prices. From compact cars to luxury models, 
            we have it all covered, and we can help with bank financing too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/vehicles">Browse Vehicles</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10" asChild>
                <Link href="/contact">Sell Your Vehicle</Link>
              </Button>
            </div>
          </div>
        </section>

        <Features />

        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">New Arrivals 🚗🔥</h2>
              <Button variant="outline" asChild>
                <Link href="/vehicles">View All</Link>
              </Button>
            </div>
            <NewArrivals />
          </div>
        </section>

        <Testimonials />
        <FAQ />
        <Newsletter />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

