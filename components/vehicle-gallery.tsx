"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const images = [
  "/cars/c-1.jpg",
  "/cars/c-1-1.webp",
  "/cars/c-1-2.webp",
  "/cars/c-1-3.webp",
]

export function VehicleGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image src={images[selectedImage] || "/placeholder.svg"} alt="Vehicle" fill className="object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-lg",
              selectedImage === index && "ring-2 ring-primary",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Vehicle thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

