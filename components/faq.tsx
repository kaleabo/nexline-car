"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What financing options are available?",
    answer:
      "We offer various financing options including bank loans, leasing, and in-house financing. Our team can help you find the best option based on your needs and circumstances.",
  },
  {
    question: "Do you offer warranty coverage?",
    answer:
      "Yes, all our vehicles come with comprehensive warranty coverage. We offer both manufacturer warranties and extended warranty options for additional peace of mind.",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer:
      "We accept trade-ins and will provide you with a fair market value for your current vehicle. This can be applied towards your new purchase.",
  },
  {
    question: "What documents do I need to purchase a vehicle?",
    answer:
      "You'll need a valid driver's license, proof of insurance, and proof of income if applying for financing. Additional documents may be required depending on the purchase method.",
  },
  {
    question: "Do you offer test drives?",
    answer:
      "Yes, we encourage test drives to ensure you're completely satisfied with your choice. You can schedule a test drive through our website or by contacting our sales team.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

