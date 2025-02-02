"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function VehicleFinancing() {
  const [price] = useState(12500000)
  const [downPayment, setDownPayment] = useState(price * 0.2)
  const [term, setTerm] = useState(60)
  const interestRate = 0.15 // Updated to reflect typical Ethiopian bank rates

  const calculateMonthlyPayment = () => {
    const principal = price - downPayment
    const monthlyRate = interestRate / 12
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    return monthlyPayment.toFixed(2)
  }

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Financing Options</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Financing Calculator</CardTitle>
            <CardDescription>Estimate your monthly payments based on your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="price">Vehicle Price</Label>
                <Input id="price" type="text" value={`ETB ${price.toLocaleString()}`} disabled />
              </div>
              <div className="space-y-2">
                <Label htmlFor="down-payment">Down Payment</Label>
                <Input
                  id="down-payment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="term">Loan Term (months)</Label>
                <Input id="term" type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} />
              </div>
              <div className="pt-4">
                <div className="text-lg font-semibold">Estimated Monthly Payment: ETB {calculateMonthlyPayment()}</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Additional Financing Options</CardTitle>
            <CardDescription>Explore our flexible financing solutions with Ethiopian banks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Bank Loan Partnership</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Finance your vehicle through our partner banks with competitive rates
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Corporate Financing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Special financing options for businesses and organizations
                </p>
                <Button variant="outline" className="w-full">
                  View Corporate Plans
                </Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Trade-In Program</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Trade in your current vehicle and use the value towards your new purchase
                </p>
                <Button variant="outline" className="w-full">
                  Get Trade-In Value
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

