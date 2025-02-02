import { SellVehicleForm } from "@/components/sell-vehicle-form"
import { Footer } from "@/components/footer"

export default function SellPage() {
  return (
    <>
      <main className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sell Your Vehicle</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the best value for your vehicle with our hassle-free selling process
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <SellVehicleForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

