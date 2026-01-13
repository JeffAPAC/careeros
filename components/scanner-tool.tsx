"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Upload,
  FileText,
  Sparkles,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react"
import { analyzeResume, type AnalysisResult } from "@/lib/mock-api"

type ViewState = "idle" | "loading" | "success"

export function ScannerTool() {
  const [viewState, setViewState] = useState<ViewState>("idle")
  const [fileName, setFileName] = useState<string>("")
  const [jobDescription, setJobDescription] = useState<string>("")
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type === "application/pdf") {
      setFileName(files[0].name)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setFileName(files[0].name)
    }
  }, [])

  const handleAnalyze = async () => {
    if (!fileName || !jobDescription.trim()) return

    setViewState("loading")

    // TODO: 1. Convert file to Blob and upload to Azure Blob Storage
    // Example: const blobUrl = await uploadToAzureBlobStorage(file)

    // TODO: 2. Send Blob URL + JD Text to Azure OpenAI (GPT-4o) endpoint
    // Example: const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/analyze'
    // const response = await fetch(apiUrl, {
    //   method: 'POST',
    //   body: JSON.stringify({ blobUrl, jobDescription })
    // })

    // Simulate API call with mock data
    const analysisResult = await analyzeResume(fileName, jobDescription)

    setResult(analysisResult)
    setViewState("success")
  }

  const handleReset = () => {
    setViewState("idle")
    setFileName("")
    setJobDescription("")
    setResult(null)
  }

  return (
    <section id="scanner" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">履歷智能掃描器</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            上傳你的履歷，貼上目標職缺描述，讓 AI 為你進行深度分析
          </p>
        </div>

        {viewState === "idle" && (
          <InputMode
            fileName={fileName}
            jobDescription={jobDescription}
            isDragging={isDragging}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onFileSelect={handleFileSelect}
            onJobDescriptionChange={setJobDescription}
            onAnalyze={handleAnalyze}
          />
        )}

        {viewState === "loading" && <LoadingMode />}

        {viewState === "success" && result && <ResultMode result={result} onReset={handleReset} />}
      </div>
    </section>
  )
}

interface InputModeProps {
  fileName: string
  jobDescription: string
  isDragging: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
  onJobDescriptionChange: (value: string) => void
  onAnalyze: () => void
}

function InputMode({
  fileName,
  jobDescription,
  isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onJobDescriptionChange,
  onAnalyze,
}: InputModeProps) {
  const isValid = fileName && jobDescription.trim().length > 50

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Resume Upload */}
        <Card className="border-2 border-dashed border-border hover:border-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Upload className="w-5 h-5 text-accent" />
              上傳履歷
            </CardTitle>
            <CardDescription>支援 PDF 格式，檔案大小不超過 10MB</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                isDragging
                  ? "border-accent bg-accent/5"
                  : fileName
                    ? "border-green-500 bg-green-500/5"
                    : "border-border hover:border-muted-foreground/50"
              }`}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
            >
              <input
                type="file"
                accept=".pdf"
                onChange={onFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {fileName ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{fileName}</p>
                    <p className="text-sm text-muted-foreground">點擊重新選擇檔案</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">拖放檔案至此處</p>
                    <p className="text-sm text-muted-foreground">或點擊選擇檔案</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Job Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-accent" />
              職缺描述
            </CardTitle>
            <CardDescription>貼上目標職缺的工作內容與要求</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="請貼上職缺描述 (Job Description)...

例如：
職位名稱：資深前端工程師
工作內容：
- 開發維護公司網站與應用程式
- 與設計師及後端工程師協作
- 參與技術選型與架構討論

必備條件：
- 3年以上前端開發經驗
- 熟悉 React, TypeScript
- 良好的溝通能力"
              className="min-h-[200px] resize-none"
              value={jobDescription}
              onChange={(e) => onJobDescriptionChange(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-2">建議至少貼上 50 字以上的職缺描述以獲得更精準的分析</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-12"
          disabled={!isValid}
          onClick={onAnalyze}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          開始 AI 智能分析
        </Button>
        {!isValid && <p className="text-sm text-muted-foreground mt-3">請上傳履歷並輸入至少 50 字的職缺描述</p>}
      </div>
    </div>
  )
}

function LoadingMode() {
  return (
    <div className="max-w-md mx-auto text-center py-16">
      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <Loader2 className="w-10 h-10 text-accent animate-spin" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">AI 正在分析你的履歷...</h3>
      <p className="text-muted-foreground mb-6">正在進行關鍵字比對、技能分析與優化建議生成</p>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-muted-foreground">履歷內容解析完成</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-500" />
          <span className="text-muted-foreground">職缺關鍵字提取完成</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Loader2 className="w-4 h-4 text-accent animate-spin" />
          <span className="text-foreground">生成智能分析報告中...</span>
        </div>
      </div>
    </div>
  )
}

interface ResultModeProps {
  result: AnalysisResult
  onReset: () => void
}

function ResultMode({ result, onReset }: ResultModeProps) {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Score Card */}
      <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground overflow-hidden">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ScoreGauge score={result.score} />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">匹配度分析結果</h3>
              <p className="text-primary-foreground/80 mb-4">
                {result.score >= 80
                  ? "優秀！你的履歷與此職缺高度匹配"
                  : result.score >= 60
                    ? "不錯！有些地方可以再優化以提升競爭力"
                    : "需要加強！建議根據下方建議進行調整"}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  {result.matchedKeywords} 個關鍵字匹配
                </Badge>
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  {result.missingSkills.hard.length + result.missingSkills.soft.length} 項待補強
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Skill Gaps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="w-5 h-5 text-destructive" />
              技能缺口分析
            </CardTitle>
            <CardDescription>職缺要求但履歷中未提及的技能</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" />
                硬技能 (Hard Skills)
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.missingSkills.hard.map((skill, index) => (
                  <Badge key={index} variant="destructive">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                軟技能 (Soft Skills)
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.missingSkills.soft.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-600 bg-yellow-500/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500" />7 天優化計畫
            </CardTitle>
            <CardDescription>按照這些步驟提升你的履歷競爭力</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.actionPlan.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-accent">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="w-5 h-5 text-accent" />
            AI 智能建議
          </CardTitle>
          <CardDescription>根據分析結果提供的個人化優化建議</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {result.insights.map((insight, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-foreground">{insight}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="text-center pt-4">
        <Button variant="outline" onClick={onReset} className="mr-4 bg-transparent">
          重新分析
        </Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">升級 Pro 取得完整報告</Button>
      </div>
    </div>
  )
}

function ScoreGauge({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-primary-foreground/20"
        />
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className="text-accent"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{score}</span>
        <span className="text-xs text-primary-foreground/70">/ 100</span>
      </div>
    </div>
  )
}
