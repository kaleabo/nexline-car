import { FinancingOptions } from "@/components/financing-options"
import { DocumentRequirements } from "@/components/document-requirements"
import { PartnerBanks } from "@/components/partner-banks"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function FinancingPage() {
  return (
    <>
      <main className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Vehicle Financing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our flexible financing options and find the perfect payment plan for your new vehicle
            </p>
          </div>
          <div className="grid gap-12">
            <FinancingOptions />
            <DocumentRequirements />
            <PartnerBanks />
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

