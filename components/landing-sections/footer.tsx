import { FileText, Github, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">履歷健檢師</span>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              AI 驅動的履歷優化平台，幫助台灣求職者提升競爭力， 成功進入理想企業。
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  功能介紹
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  價格方案
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  使用教學
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">法律條款</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  服務條款
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  隱私政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Cookie 政策
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">© 2026 履歷健檢師. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
