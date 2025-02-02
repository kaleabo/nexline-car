import { VehicleGrid } from "@/components/vehicle-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { Footer } from "@/components/footer"

export default function VehiclesPage() {
  return (
    <>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 flex-shrink-0">
              <FilterSidebar />
            </aside>
            <div className="flex-1">
              <VehicleGrid />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

