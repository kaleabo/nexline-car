import { CompanyHistory } from "@/components/company-history"
import { MissionVision } from "@/components/mission-vision"
import { TeamMembers } from "@/components/team-members"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <main className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Nexline</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading the automotive industry in Ethiopia with excellence and innovation
            </p>
          </div>
          <div className="grid gap-24">
            <CompanyHistory />
            <MissionVision />
            <TeamMembers />
            <WhyChooseUs />
            <Testimonials />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

