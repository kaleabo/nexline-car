import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const banks = [
  {
    name: "Commercial Bank of Ethiopia",
    logo: "/banks/cbe.png",
  },
  {
    name: "Awash Bank",
    logo: "/banks/awash.png",
  },
  {
    name: "Dashen Bank",
    logo: "/banks/dashen.png",
  },
  {
    name: "Bank of Abyssinia",
    logo: "/banks/abyssinia.png",
  },
]

export function PartnerBanks() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Our Partner Banks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {banks.map((bank) => (
          <Card key={bank.name} className="hover:border-primary transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Image src={bank.logo || "/placeholder.svg"} alt={bank.name} width={120} height={60} className="mb-4" />
              <p className="font-medium">{bank.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

