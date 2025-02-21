"use client"
import { useState, useCallback, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  autoPlayInterval?: number
  className?: string
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "default",
    name: "Abebe Kebede",
    role: "Customer",
    content: "Please add testimonials to see customer reviews.",
    rating: 5,
    image: "/api/placeholder/80/80"
  }
]

export function Testimonials({
  autoPlayInterval = 5000,
  className
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const testimonials = [
    {
      id: 1,
      name: "Girum Hailegebriel",
      role: "Rotaractor",
      content:
        "Nexline provided exceptional service in helping me find the perfect vehicle for my business needs. Their team was professional and knowledgeable.",
      image: "/testimonial/client-1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Yeabsira Alemu",
      role: "Social medial manager",
      content:
        "I appreciate their transparent pricing and excellent customer service. The financing options were clearly explained and very competitive.",
      image: "/testimonial/client-2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Bisrat Berhanu",
      role: "International sales",
      content:
        "The selection of premium vehicles is impressive. The staff's knowledge and attention to detail made the process smooth and enjoyable.",
      image: "/testimonial/client-3.jpg",
      rating: 5,
    },
  ]
  // Reset index if testimonials length changes
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      setCurrentIndex(0)
    }
  }, [testimonials.length, currentIndex])

  const next = useCallback(() => {
    if (!testimonials.length) return
    setSlideDirection('right')
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }, [testimonials.length])

  const previous = useCallback(() => {
    if (!testimonials.length) return
    setSlideDirection('left')
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return
    const interval = setInterval(next, autoPlayInterval)
    return () => clearInterval(interval)
  }, [next, isAutoPlaying, autoPlayInterval, testimonials.length])

  if (!testimonials.length) {
    return null
  }

  const currentTestimonial = testimonials[currentIndex]
  return (
    <section className={cn("py-16 md:py-24 overflow-hidden", className)}>
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied customers who have transformed their business
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div
            className={cn(
              "transition-all duration-300 ease-in-out",
              slideDirection === 'right' ? 'slide-right' : 'slide-left'
            )}
          >
            <Card className="bg-gradient-to-br from-background to-background/40 backdrop-blur-sm border-primary/10">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6 transition-transform duration-300 hover:scale-105">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-full blur-sm" />
                    <Image
                      src={currentTestimonial.image || "/api/placeholder/80/80"}
                      alt={currentTestimonial.name}
                      width={80}
                      height={80}
                      className="relative rounded-full object-cover"
                      priority
                    />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star 
                        key={i}
                        className="w-5 h-5 fill-primary text-primary animate-fade-in"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  <p className="text-xl mb-8 italic leading-relaxed">
                    "{currentTestimonial.content}"
                  </p>

                  <div className="animate-fade-up">
                    <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                    <p className="text-muted-foreground">{currentTestimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {testimonials.length > 1 && (
            <>
              <div className="flex justify-center gap-2 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full transition-transform hover:scale-110"
                  onClick={previous}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full transition-transform hover:scale-110"
                  onClick={next}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "bg-primary w-6"
                        : "bg-primary/20 hover:bg-primary/40"
                    )}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}