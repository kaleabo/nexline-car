"use client";

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Send, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const BlobPattern = () => (
  <svg
    viewBox="0 0 1000 1000"
    className="absolute w-full h-full opacity-30"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="50%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
      </linearGradient>
      <filter id="blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30" />
      </filter>
    </defs>
    <g filter="url(#blur)">
      <circle cx="250" cy="500" r="200" fill="url(#blob-gradient)">
        <animate
          attributeName="cy"
          values="500;520;500"
          dur="10s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="750" cy="500" r="200" fill="url(#blob-gradient)">
        <animate
          attributeName="cy"
          values="500;480;500"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
)

const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="grid"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Add newsletter subscription logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      toast.success("Thank you for subscribing!")
      setEmail("")
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70">
        <BlobPattern />
        <GridPattern />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center text-primary-foreground"
        >
          {/* Decorative light effect */}
          <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-50 blur-2xl" />

          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider">Newsletter</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Stay in the Loop
          </h2>
          
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for the latest vehicle arrivals, exclusive offers, and automotive news
          </p>

          <form 
            onSubmit={handleSubmit} 
            className="group relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 
                         text-primary-foreground placeholder:text-primary-foreground/60 
                         focus-visible:ring-primary-foreground/30"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="h-12 px-8 font-medium bg-primary-foreground text-primary
                       hover:bg-primary-foreground/90 transition-all duration-300 
                       hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]
                       disabled:opacity-70 disabled:cursor-not-allowed"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    Subscribing...
                  </motion.div>
                ) : (
                  <motion.div
                    key="subscribe"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    Subscribe
                    <Send 
                      className={`w-4 h-4 transition-transform duration-300 
                               ${isHovered ? 'translate-x-1' : ''}`}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </form>

          <p className="mt-4 text-sm text-primary-foreground/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}