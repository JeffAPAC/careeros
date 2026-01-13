export interface AnalysisResult {
  score: number
  matchedKeywords: number
  missingSkills: {
    hard: string[]
    soft: string[]
  }
  actionPlan: string[]
  insights: string[]
}

export async function analyzeResume(fileName: string, jobDescription: string): Promise<AnalysisResult> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // TODO: Replace with actual Azure OpenAI API call
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/analyze'
  // const response = await fetch(apiUrl, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ fileName, jobDescription })
  // })
  // return response.json()

  // Mock response data
  return {
    score: 78,
    matchedKeywords: 12,
    missingSkills: {
      hard: ["TypeScript", "GraphQL", "CI/CD", "Docker"],
      soft: ["跨部門溝通", "敏捷開發經驗", "團隊領導"],
    },
    actionPlan: [
      "Day 1-2: 在履歷中加入 TypeScript 相關專案經驗描述",
      "Day 3: 補充 CI/CD 流程經驗，即使是簡單的自動化部署也可以",
      "Day 4-5: 為專案經歷加入量化數據，如「提升效能 30%」",
      "Day 6: 調整履歷格式，確保關鍵字更容易被 ATS 識別",
      "Day 7: 針對此職缺客製化履歷摘要段落",
    ],
    insights: [
      "建議在「專案經理」經歷中加入量化成果，例如：管理 5 人團隊、專案提前 2 週完成等具體數據。",
      "職缺強調 TypeScript，但你的履歷中主要提到 JavaScript。建議明確列出 TypeScript 專案經驗。",
      "此職缺重視跨部門協作能力，建議在經歷描述中加入相關合作經驗。",
      "履歷格式建議：將「技能」區塊移至更醒目位置，方便 HR 快速掃描。",
    ],
  }
}
