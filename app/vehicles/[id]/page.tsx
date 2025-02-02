import { VehicleGallery } from "@/components/vehicle-gallery"
import { VehicleDetails } from "@/components/vehicle-details"
import { VehicleFeatures } from "@/components/vehicle-features"
import { VehicleFinancing } from "@/components/vehicle-financing"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function VehicleDetailPage() {
  return (
    <>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <VehicleGallery />
            <VehicleDetails />
          </div>
          <VehicleFeatures />
          <VehicleFinancing />
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}

