"use client";

import { Button } from "@/components/ui/button";
import { Features } from "@/components/features";
import { NewArrivals } from "@/components/new-arrivals";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />

      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
            >
              New Arrivals
            </motion.h2>
            <Button
              variant="outline"
              className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <Link href="/vehicles" className="flex items-center gap-2">
                View All
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </Link>
            </Button>
          </div>
          <NewArrivals />
        </div>
      </section>

      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactCTA />
      <Footer />
    </>
  );
}
