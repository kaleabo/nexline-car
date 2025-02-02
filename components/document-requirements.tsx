import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, CheckSquare } from "lucide-react"

export function DocumentRequirements() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Personal Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Valid ID Card/Passport</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Marriage/Single Certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Residential Address Proof</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Recent Photograph</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Financial Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Valid Business License</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Tax Clearance Certificate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Bank Statement (6 months)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-primary" />
                <span>Financial Statement</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

