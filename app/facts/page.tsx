import { Metadata } from 'next'
import { FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Yaba Facts | Modern Yaba Recovery System',
  description: 'Learn important facts about Yaba, its effects, and the recovery process.',
}

const facts = [
  {
    title: "Composition",
    content: "Yaba is a mixture of methamphetamine and caffeine, often produced in pill form."
  },
  {
    title: "Street Names",
    content: "Yaba is known by various names including 'crazy medicine', 'Nazi speed', and 'bhul bhuliya'."
  },
  {
    title: "Prevalence",
    content: "Yaba is particularly prevalent in Southeast Asian countries, with significant usage in Bangladesh, Thailand, and Myanmar."
  },
  {
    title: "Short-term Effects",
    content: "Users experience increased energy, decreased appetite, and euphoria, often followed by a severe crash."
  },
  {
    title: "Long-term Effects",
    content: "Chronic use can lead to severe dental problems, skin sores, anxiety, confusion, and potential psychosis."
  },
  {
    title: "Addiction Potential",
    content: "Yaba is highly addictive, with users quickly developing tolerance and experiencing severe withdrawal symptoms."
  },
  {
    title: "Recovery Time",
    content: "Full recovery from Yaba addiction can take 6-12 months or longer, depending on the individual and the support received."
  },
  {
    title: "Treatment Approaches",
    content: "Treatment often involves a combination of detoxification, behavioral therapy, and support groups."
  }
]

export default function FactsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600 flex items-center"><FaInfoCircle className="mr-2" />Yaba Facts</h1>
      <p className="mb-6">Understanding Yaba and its effects is crucial for recovery. Here are some important facts about Yaba:</p>
      
      <div className="grid gap-6 md:grid-cols-2">
        {facts.map((fact, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 text-indigo-600">{fact.title}</h2>
            <p>{fact.content}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 flex items-start">
        <FaExclamationTriangle className="text-yellow-500 mr-2 mt-1" />
        <div>
          <p className="font-bold">Important Note:</p>
          <p>If you or someone you know is struggling with Yaba addiction, seek professional help immediately. Recovery is possible with the right support and treatment.</p>
        </div>
      </div>
    </div>
  )
}

