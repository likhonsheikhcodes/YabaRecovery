import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Yaba | Modern Yaba Recovery System',
  description: 'Learn about Yaba, its effects, and the importance of recovery.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-indigo-600">About Yaba (Red Pills)</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">What is Yaba?</h2>
        <p className="mb-4">
          Yaba, also known as the "madness drug" or "Nazi speed," is a combination of methamphetamine and caffeine. It is usually produced in pill form and is prevalent in Southeast Asian countries.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Effects of Yaba</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Increased energy and alertness</li>
          <li>Euphoria and sense of well-being</li>
          <li>Decreased appetite</li>
          <li>Increased heart rate and blood pressure</li>
          <li>Hyperthermia (elevated body temperature)</li>
          <li>Increased libido</li>
          <li>Anxiety and paranoia</li>
          <li>Aggressive behavior</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Long-term Consequences</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Severe dental problems ("meth mouth")</li>
          <li>Weight loss and malnutrition</li>
          <li>Skin sores and infections</li>
          <li>Cognitive impairment</li>
          <li>Increased risk of stroke and heart disease</li>
          <cut_off_point>
li>
          <li>Increased risk of stroke and heart disease</li>
          
</cut_off_point>
          <li>Psychosis and hallucinations</li>
          <li>Damage to liver, kidneys, and lungs</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-indigo-600">Importance of Recovery</h2>
        <p className="mb-4">
          Recovery from Yaba addiction is crucial for regaining physical and mental health, rebuilding relationships, and reclaiming your life. With proper support and treatment, recovery is possible. Our Modern Yaba Recovery System is designed to provide you with the tools, resources, and support needed to overcome addiction and build a healthier future.
        </p>
      </div>
    </div>
  )
}

