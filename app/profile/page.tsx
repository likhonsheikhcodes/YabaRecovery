'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import { FaUser, FaBirthdayCake, FaPen } from 'react-icons/fa'

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [bio, setBio] = useState('')
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const getProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
        const { data, error } = await supabase
          .from('profiles')
          .select('name, age, bio')
          .eq('id', user.id)
          .single()

        if (data) {
          setName(data.name || '')
          setAge(data.age || '')
          setBio(data.bio || '')
        }
      } else {
        router.push('/login')
      }
      setLoading(false)
    }
    getProfile()
  }, [router])

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setUpdating(true)
    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        name,
        age,
        bio,
        updated_at: new Date().toISOString(),
      })
    setUpdating(false)
    if (error) {
      alert('প্রোফাইল আপডেট করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।')
    } else {
      alert('প্রোফাইল সফলভাবে আপডেট করা হয়েছে।')
    }
  }

  if (loading) {
    return <div className="text-center mt-8">লোড হচ্ছে...</div>
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">প্রোফাইল</h1>
      <form onSubmit={updateProfile} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
            <FaUser className="inline mr-2" />নাম
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">
            <FaBirthdayCake className="inline mr-2" />বয়স
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div>
          <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-700">
            <FaPen className="inline mr-2" />বায়ো
          </label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-teal-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition-colors flex items-center justify-center"
          disabled={updating}
        >
          {updating ? 'আপডেট হচ্ছে...' : 'প্রোফাইল আপডেট করুন'}
        </button>
      </form>
    </div>
  )
}

