import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "履歷掃描是如何運作的？",
    answer:
      "我們的 AI 會解析你的履歷內容，並與你貼上的職缺描述進行關鍵字比對。系統會識別職缺要求的技能、經驗和資格，然後檢查你的履歷是否涵蓋這些要素，最後產生匹配度分數和具體的優化建議。",
  },
  {
    question: "我的履歷資料安全嗎？",
    answer:
      "絕對安全。我們採用業界標準的加密技術保護你的資料。你的履歷僅用於分析目的，不會被儲存或分享給第三方。分析完成後，檔案會在 24 小時內自動刪除。",
  },
  {
    question: "什麼是 ATS 相容性？",
    answer:
      "ATS (Applicant Tracking System) 是企業用來篩選履歷的自動化系統。許多履歷因為格式問題而被 ATS 過濾掉。我們的 Pro 版會檢測你的履歷是否符合 ATS 要求，確保你的履歷能順利通過第一關篩選。",
  },
  {
    question: "免費版和 Pro 版有什麼差別？",
    answer:
      "免費版提供基礎的關鍵字匹配分析和技能缺口報告。Pro 版則包含深度 AI 分析、履歷改寫建議、ATS 相容性檢測、求職信生成等進階功能，並且沒有使用次數限制。",
  },
  {
    question: "分析結果準確嗎？",
    answer:
      "我們的 AI 模型經過大量台灣職缺資料訓練，針對台灣就業市場進行優化。雖然 AI 分析非常有參考價值，但我們建議將其作為優化履歷的起點，同時搭配自身判斷和業界人士的建議。",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">常見問題</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">有任何疑問？這裡可能有你需要的答案</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
