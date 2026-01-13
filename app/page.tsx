import { HeroSection } from "@/components/landing-sections/hero-section"
import { StepsSection } from "@/components/landing-sections/steps-section"
import { SocialProofSection } from "@/components/landing-sections/social-proof-section"
import { ScannerTool } from "@/components/scanner-tool"
import { PricingSection } from "@/components/landing-sections/pricing-section"
import { FAQSection } from "@/components/landing-sections/faq-section"
import { Footer } from "@/components/landing-sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StepsSection />
      <SocialProofSection />
      <ScannerTool />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
