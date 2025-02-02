import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const team = [
  {
    name: "Abebe Tadesse",
    role: "Chief Executive Officer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sara Mohammed",
    role: "Sales Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Daniel Bekele",
    role: "Finance Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Hiwot Alemu",
    role: "Customer Service Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamMembers() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the dedicated professionals leading Nexline towards excellence
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <Card key={member.name}>
            <CardContent className="p-4">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

