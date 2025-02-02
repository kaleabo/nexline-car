"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="brand">
            <AccordionTrigger>Brand</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand-toyota" />
                  <Label htmlFor="brand-toyota">Toyota</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand-byd" />
                  <Label htmlFor="brand-byd">BYD</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="brand-hyundai" />
                  <Label htmlFor="brand-hyundai">Hyundai</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fuel-type">
            <AccordionTrigger>Fuel Type</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="fuel-electric" />
                  <Label htmlFor="fuel-electric">Electric</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fuel-hybrid" />
                  <Label htmlFor="fuel-hybrid">Hybrid</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fuel-petrol" />
                  <Label htmlFor="fuel-petrol">Petrol</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fuel-diesel" />
                  <Label htmlFor="fuel-diesel">Diesel</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price">
            <AccordionTrigger>Price Range</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <Slider defaultValue={[2000000]} max={15000000} step={100000} className="w-full" />
                <div className="text-sm text-muted-foreground">Up to ETB 2,000,000</div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="payment">
            <AccordionTrigger>Payment Type</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="payment-cash" />
                  <Label htmlFor="payment-cash">Cash</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="payment-bank" />
                  <Label htmlFor="payment-bank">Bank Loan</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="payment-5050" />
                  <Label htmlFor="payment-5050">50/50 Payment</Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

