import { Metadata } from 'next'
import { FaAppleAlt, FaCarrot, FaFish, FaEgg, FaLeaf } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Nutrition Guide | Modern Yaba Recovery System',
  description: 'Get personalized nutrition advice to support your recovery from Yaba addiction and improve your overall health.',
}

const nutritionTips = [
  {
    title: "Increase Protein Intake",
    icon: FaEgg,
    description: "Protein helps repair tissues damaged by Yaba use and supports the production of neurotransmitters.",
    examples: "Lean meats, fish, eggs, legumes, and dairy products."
  },
  {
    title: "Boost Antioxidants",
    icon: FaCarrot,
    description: "Antioxidants help combat oxidative stress caused by Yaba use and support overall health.",
    examples: "Berries, dark leafy greens, nuts, and colorful vegetables."
  },
  {
    title: "Incorporate Omega-3 Fatty Acids",
    icon: FaFish,
    description: "Omega-3s support brain health and may help reduce inflammation and cravings.",
    examples: "Fatty fish (salmon, mackerel), chia seeds, flaxseeds, and walnuts."
  },
  {
    title: "Stay Hydrated",
    icon: FaAppleAlt,
    description: "Proper hydration is crucial for detoxification and overall health during recovery.",
    examples: "Water, herbal teas, and fruits with high water content."
  },
  {
    title: "Include Complex Carbohydrates",
    icon: FaLeaf,
    description: "Complex carbs provide steady energy and help stabilize mood.",
    examples: "Whole grains, sweet potatoes, quinoa, and oats."
  }
]

export default function NutritionPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">Nutrition Guide for Recovery</h1>
      <p className="mb-6">Proper nutrition plays a crucial role in recovery from Yaba addiction. Here are some key nutritional tips to support your healing process:</p>
      
      {nutritionTips.map((tip, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-2 text-indigo-600 flex items-center">
            <tip.icon className="mr-2" /> {tip.title}
          </h2>
          <p className="mb-4">{tip.description}</p>
          <div className="bg-green-100 p-4 rounded">
            <h3 className="font-bold mb-2">Examples:</h3>
            <p>{tip.examples}</p>
          </div>
        </div>
      ))}
      
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-8">
        <p className="font-bold">Important Note:</p>
        <p>Always consult with a healthcare professional or registered dietitian before making significant changes to your diet, especially if you have any underlying health conditions or are taking medications.</p>
      </div>
    </div>
  )
}

