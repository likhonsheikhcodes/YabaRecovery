'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaHome, FaInfoCircle, FaChartLine, FaRoad, FaAppleAlt, FaRobot, FaLightbulb, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa'
import { supabase } from '../../lib/supabase'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user))
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null)
    })
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <header className="bg-gradient-to-r from-teal-600 to-purple-600 p-4 text-white sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold hover:text-teal-200 transition-colors">আধুনিক ইয়াবা পুনর্বাসন</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-teal-200 transition-colors"><FaHome className="inline mr-1" /> হোম</Link>
          <Link href="/about" className="hover:text-teal-200 transition-colors"><FaInfoCircle className="inline mr-1" /> ইয়াবা সম্পর্কে</Link>
          {user && (
            <>
              <Link href="/progress" className="hover:text-teal-200 transition-colors"><FaChartLine className="inline mr-1" /> অগ্রগতি</Link>
              <Link href="/stages" className="hover:text-teal-200 transition-colors"><FaRoad className="inline mr-1" /> পর্যায়</Link>
              <Link href="/nutrition" className="hover:text-teal-200 transition-colors"><FaAppleAlt className="inline mr-1" /> পুষ্টি</Link>
              <Link href="/support" className="hover:text-teal-200 transition-colors"><FaRobot className="inline mr-1" /> এআই সহায়তা</Link>
              <Link href="/facts" className="hover:text-teal-200 transition-colors"><FaLightbulb className="inline mr-1" /> তথ্য</Link>
              <Link href="/profile" className="hover:text-teal-200 transition-colors"><FaUser className="inline mr-1" /> প্রোফাইল</Link>
              <button onClick={handleLogout} className="hover:text-teal-200 transition-colors">লগআউট</button>
            </>
          )}
          {!user && (
            <>
              <Link href="/login" className="hover:text-teal-200 transition-colors"><FaSignInAlt className="inline mr-1" /> লগইন</Link>
              <Link href="/register" className="hover:text-teal-200 transition-colors"><FaUserPlus className="inline mr-1" /> নিবন্ধন</Link>
            </>
          )}
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mt-4 md:hidden">
          <Link href="/" className="block py-2 hover:text-teal-200 transition-colors"><FaHome className="inline mr-1" /> হোম</Link>
          <Link href="/about" className="block py-2 hover:text-teal-200 transition-colors"><FaInfoCircle className="inline mr-1" /> ইয়াবা সম্পর্কে</Link>
          {user && (
            <>
              <Link href="/progress" className="block py-2 hover:text-teal-200 transition-colors"><FaChartLine className="inline mr-1" /> অগ্রগতি</Link>
              <Link href="/stages" className="block py-2 hover:text-teal-200 transition-colors"><FaRoad className="inline mr-1" /> পর্যায়</Link>
              <Link href="/nutrition" className="block py-2 hover:text-teal-200 transition-colors"><FaAppleAlt className="inline mr-1" /> পুষ্টি</Link>
              <Link href="/support" className="block py-2 hover:text-teal-200 transition-colors"><FaRobot className="inline mr-1" /> এআই সহায়তা</Link>
              <Link href="/facts" className="block py-2 hover:text-teal-200 transition-colors"><FaLightbulb className="inline mr-1" /> তথ্য</Link>
              <Link href="/profile" className="block py-2 hover:text-teal-200 transition-colors"><FaUser className="inline mr-1" /> প্রোফাইল</Link>
              <button onClick={handleLogout} className="block py-2 hover:text-teal-200 transition-colors w-full text-left">লগআউট</button>
            </>
          )}
          {!user && (
            <>
              <Link href="/login" className="block py-2 hover:text-teal-200 transition-colors"><FaSignInAlt className="inline mr-1" /> লগইন</Link>
              <Link href="/register" className="block py-2 hover:text-teal-200 transition-colors"><FaUserPlus className="inline mr-1" /> নিবন্ধন</Link>
            </>
          )}
        </nav>
      )}
    </header>
  )
}

