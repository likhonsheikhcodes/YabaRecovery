import Link from 'next/link'
import { FaChartLine, FaRoad, FaAppleAlt, FaRobot, FaLightbulb, FaInfoCircle } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Modern Yaba Recovery System</h1>
      <p className="text-xl text-center mb-12">Your journey to recovery starts here. We provide comprehensive support and resources to help you overcome Yaba addiction.</p>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaInfoCircle className="mr-2" />About Yaba</h2>
          <p className="mb-4">
            Understand the dangers of Yaba, its effects on your body and mind, and why recovery is crucial for your future.
          </p>
          <Link href="/about" className="text-indigo-500 hover:underline transition-colors flex items-center">
            Learn more about Yaba <FaInfoCircle className="ml-1" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaChartLine className="mr-2" />Track Your Recovery</h2>
          <p className="mb-4">
            Monitor your progress, log your symptoms, and stay motivated on your journey to recovery with our advanced tracking system.
          </p>
          <Link href="/login" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 inline-block transition-colors flex items-center">
            Start Tracking <FaChartLine className="ml-1" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaRoad className="mr-2" />Recovery Stages</h2>
          <p className="mb-4">
            Understand the different stages of recovery and get tailored advice for each phase of your journey to sobriety.
          </p>
          <Link href="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block transition-colors flex items-center">
            Explore Stages <FaRoad className="ml-1" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaAppleAlt className="mr-2" />Nutrition Guide</h2>
          <p className="mb-4">
            Get personalized nutrition advice to support your recovery, boost your immune system, and improve your overall health.
          </p>
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block transition-colors flex items-center">
            View Nutrition Guide <FaAppleAlt className="ml-1" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaRobot className="mr-2" />AI Doctor Support</h2>
          <p className="mb-4">
            Get immediate, personalized support from our AI doctor, trained in addiction recovery and mental health counseling.
          </p>
          <Link href="/login" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 inline-block transition-colors flex items-center">
            Chat with AI Doctor <FaRobot className="ml-1" />
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold mb-4 text-indigo-600 flex items-center"><FaLightbulb className="mr-2" />Yaba Facts</h2>
          <p className="mb-4">
            Learn important facts about Yaba, its effects, and the recovery process to better understand your journey.
          </p>
          <Link href="/facts" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 inline-block transition-colors flex items-center">
            Explore Yaba Facts <FaLightbulb className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

