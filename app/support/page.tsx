'use client'

import { useState, useEffect } from 'react'
import { FaRobot, FaUser, FaPaperPlane } from 'react-icons/fa'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function SupportPage() {
  const [messages, setMessages] = useState<Array<{ role: string, content: string }>>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [userProfile, setUserProfile] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single()
        if (data) {
          setUserProfile(data)
        }
      } else {
        router.push('/login')
      }
    }
    checkUser()
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: input,
          userProfile: userProfile
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const reader = response.body?.getReader()
      const decoder = new TextDecoder()
      let aiMessage = { role: 'assistant', content: '' }

      while (true) {
        const { done, value } = await reader!.read()
        if (done) break
        const chunk = decoder.decode(value)
        aiMessage.content += chunk
        setMessages(prev => [...prev.slice(0, -1), aiMessage])
      }

    } catch (error) {
      console.error('Error generating response:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: "দুঃখিত, আমি এখন উত্তর দিতে অসুবিধা হচ্ছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।" }])
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return <div>লোড হচ্ছে...</div>
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">এআই ডাক্তার সহায়তা</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4 h-96 overflow-y-auto">
        {messages.map((m, index) => (
          <div key={index} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-teal-500 text-white' : 'bg-gray-200'}`}>
              {m.role === 'user' ? <FaUser className="inline-block mr-2" /> : <FaRobot className="inline-block mr-2" />}
              {m.content}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <span className="inline-block animate-pulse">চিন্তা করছি...</span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="আপনার প্রশ্ন এখানে লিখুন..."
          className="flex-grow p-2 border rounded-l focus:ring-2 focus:ring-teal-500"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-teal-500 text-white px-4 py-2 rounded-r hover:bg-teal-600 transition-colors flex items-center"
          disabled={isLoading}
        >
          <FaPaperPlane className="mr-2" /> পাঠান
        </button>
      </form>
    </div>
  )
}

