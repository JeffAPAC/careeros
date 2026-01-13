import { Upload, FileSearch, Rocket } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "上傳履歷",
    description: "拖放或點擊上傳你的 PDF 履歷檔案",
    step: "01",
  },
  {
    icon: FileSearch,
    title: "貼上職缺",
    description: "複製目標職缺的工作描述 (JD)",
    step: "02",
  },
  {
    icon: Rocket,
    title: "獲得策略",
    description: "AI 分析產出匹配度報告與優化建議",
    step: "03",
  },
]

export function StepsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">三步驟，開啟你的職涯優勢</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            簡單快速的操作流程，讓 AI 為你的履歷把脈診斷
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div className="mt-4">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
