"use client"

import { Shield, Wallet, Clock, ThumbsUp } from "lucide-react"

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Nexline?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a premium car buying experience with exceptional service and support
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Quality Assured</h3>
            <p className="text-sm text-muted-foreground">All vehicles undergo rigorous inspection and certification</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Flexible Financing</h3>
            <p className="text-sm text-muted-foreground">Competitive rates and multiple financing options available</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Fast Process</h3>
            <p className="text-sm text-muted-foreground">Quick and hassle-free buying process</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Customer First</h3>
            <p className="text-sm text-muted-foreground">Dedicated support throughout your journey</p>
          </div>
        </div>
      </div>
    </section>
  )
}

