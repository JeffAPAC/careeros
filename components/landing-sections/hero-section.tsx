import { Button } from "@/components/ui/button"
import { Sparkles, FileText } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5" />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI 驅動的職涯助手</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            AI 驅動的履歷健檢
            <br />
            <span className="text-accent">讓你的才華被看見</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            不再需要人脈關係，透過 AI 智能分析，精準比對履歷與職缺需求， 幫你找出關鍵缺口，提升面試邀約機率。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              立即免費掃描
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8 bg-transparent"
            >
              <FileText className="w-5 h-5 mr-2" />
              查看範例報告
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>免費使用</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>無需註冊</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span>即時分析</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
