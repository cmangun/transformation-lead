import { notFound } from "next/navigation"

const caseStudies = [
  {
    title: "PUBLICIS HEALTH AI-POWERED KNOWLEDGE MANAGEMENT",
    slug: "ai-knowledge-management",
    content: "Content for Publicis Health AI-Powered Knowledge Management case study...",
  },
  {
    title: "PFIZER CONTENT SUPPLY CHAIN INNOVATION",
    slug: "content-supply-chain",
    content: "Content for Pfizer Content Supply Chain Innovation case study...",
  },
  // Add other case studies here...
]

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-white">{study.title}</h1>
      <div className="bg-white/10 p-6 rounded-lg">
        <p className="text-white/90">{study.content}</p>
      </div>
    </div>
  )
}

