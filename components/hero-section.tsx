import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <Image
            src="/images/hero-fallback.jpg"
            alt="Luxury cars showcase"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Discover Your
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                Perfect Drive
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
              Experience luxury and performance with our curated collection of premium vehicles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="group bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20"
            >
              <Link href="/vehicles" className="flex items-center gap-2">
                Explore Vehicles
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="/sell" className="flex items-center gap-2">
                Sell Your Vehicle
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-lg"
                >
                  →
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </motion.div>
        <span className="text-white/50 text-sm">Scroll to explore</span>
      </motion.div>
    </motion.section>
  )
}