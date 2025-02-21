"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface FAQItem {
  question: string
  answer: string
  category?: string
}

const faqs: FAQItem[] = [
  {
    question: "What financing options are available?",
    answer:
      "We offer various financing options including bank loans, leasing, and in-house financing. Our team can help you find the best option based on your needs and circumstances.",
    category: "Finance",
  },
  {
    question: "Do you offer warranty coverage?",
    answer:
      "Yes, all our vehicles come with comprehensive warranty coverage. We offer both manufacturer warranties and extended warranty options for additional peace of mind.",
    category: "Services",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer:
      "We accept trade-ins and will provide you with a fair market value for your current vehicle. This can be applied towards your new purchase.",
      category: "Services",
  },
  {
    question: "What documents do I need to purchase a vehicle?",
    answer:
      "You'll need a valid driver's license, proof of insurance, and proof of income if applying for financing. Additional documents may be required depending on the purchase method.",
      category: "Services",
  },
  {
    question: "Do you offer test drives?",
    answer:
      "Yes, we encourage test drives to ensure you're completely satisfied with your choice. You can schedule a test drive through our website or by contacting our sales team.",
      category: "Services",
  },
]

export function FAQ() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !activeCategory || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-primary/10">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Support</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to common questions about our services and processes
          </p>

          {/* Search and Filter */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                className="pl-10 bg-background/50 backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all
                ${!activeCategory 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category || null)}
                className={`px-4 py-2 rounded-full text-sm transition-all
                  ${activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <Accordion type="single" collapsible className="w-full">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`} className="border-b border-muted-foreground/20">
                    <AccordionTrigger className="hover:no-underline">
                      <span className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="prose prose-sm dark:prose-invert">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}