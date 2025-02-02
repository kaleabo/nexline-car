"use client"

import { useState } from "react"
import { NewArrivals } from "./new-arrivals"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function VehicleGrid() {
  const [sort, setSort] = useState("newest")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Available Vehicles</h1>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="mileage">Mileage</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <NewArrivals />
    </div>
  )
}

