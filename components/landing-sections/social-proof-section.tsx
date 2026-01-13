import { Users, FileCheck, Building2 } from "lucide-react"

const stats = [
  { icon: FileCheck, value: "10,000+", label: "份報告已生成" },
  { icon: Users, value: "8,500+", label: "位求職者使用" },
  { icon: Building2, value: "95%", label: "用戶滿意度" },
]

const companies = ["Google", "Microsoft", "TSMC", "MediaTek", "LINE", "Shopee"]

export function SocialProofSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-6">用戶成功進入以下企業</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
