import { Metadata } from 'next'
import { FaHourglassStart, FaHeartbeat, FaBrain, FaBalanceScale, FaChartLine } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Recovery Stages | Modern Yaba Recovery System',
  description: 'Understand the different stages of recovery from Yaba addiction and get tailored advice for each phase.',
}

const stages = [
  {
    title: "Early Abstinence",
    icon: FaHourglassStart,
    description: "The first few days to weeks after quitting Yaba. This stage is characterized by intense cravings and withdrawal symptoms.",
    advice: "Focus on getting through each day without using. Seek medical support for managing withdrawal symptoms. Attend support group meetings frequently."
  },
  {
    title: "Protracted Abstinence",
    icon: FaHeartbeat,
    description: "Lasting several months, this stage involves dealing with post-acute withdrawal symptoms (PAWS) and learning to live without Yaba.",
    advice: "Develop healthy coping mechanisms for stress. Establish a routine that includes regular exercise and proper nutrition. Continue attending support groups."
  },
  {
    title: "Adjustment and Resolution",
    icon: FaBrain,
    description: "This stage involves repairing relationships, addressing underlying issues, and developing a new lifestyle.",
    advice: "Engage in therapy to address underlying issues. Work on rebuilding relationships. Develop new hobbies and interests that don't involve substance use."
  },
  {
    title: "Maintenance",
    icon: FaBalanceScale,
    description: "The ongoing stage of recovery where you work to maintain your sobriety and prevent relapse.",
    advice: "Stay vigilant about triggers and high-risk situations. Continue to attend support groups and therapy sessions. Help others in their recovery journey."
  },
  {
    title: "Advanced Recovery",
    icon: FaChartLine,
    description: "This stage represents long-term recovery and personal growth beyond addiction.",
    advice: "Focus on personal growth and life goals. Consider becoming a mentor or sponsor for others in recovery. Celebrate your achievements and continue to prioritize your recovery."
  }
]

export default function StagesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Recovery Stages</h1>
      <p className="mb-6">Understanding the stages of recovery can help you navigate your journey to sobriety. Each stage presents unique challenges and opportunities for growth.</p>
      
      {stages.map((stage, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 flex items-center">
            <stage.icon className="mr-2" /> {stage.title}
          </h2>
          <p className="mb-4">{stage.description}</p>
          <div className="bg-indigo-100 p-4 rounded">
            <h3 className="font-bold mb-2">Advice for this stage:</h3>
            <p>{stage.advice}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

