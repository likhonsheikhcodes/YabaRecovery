import './globals.css'
import { Noto_Sans_Bengali } from 'next/font/google'
import { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'

const notoBengali = Noto_Sans_Bengali({ 
  weight: ['400', '700'],
  subsets: ['bengali'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'আধুনিক ইয়াবা পুনর্বাসন ব্যবস্থা',
  description: 'ইয়াবা আসক্তি থেকে মুক্তির জন্য একটি ব্যাপক প্ল্যাটফর্ম, যা ব্যক্তিগত সহায়তা, ট্র্যাকিং এবং সংস্থান প্রদান করে।',
  keywords: 'ইয়াবা, আসক্তি, পুনর্বাসন, মানসিক স্বাস্থ্য, সহায়তা',
  openGraph: {
    title: 'আধুনিক ইয়াবা পুনর্বাসন ব্যবস্থা',
    description: 'ইয়াবা আসক্তির বিরুদ্ধে লড়াইয়ে আমাদের সম্প্রদায়ে যোগ দিন। ব্যক্তিগত সহায়তা পান এবং আপনার পুনর্বাসন যাত্রা ট্র্যাক করুন।',
    images: [{ url: 'https://cdn.example.com/og-image.jpg', width: 1200, height: 630, alt: 'ইয়াবা পুনর্বাসন ব্যবস্থা' }],
    type: 'website',
    locale: 'bn_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'আধুনিক ইয়াবা পুনর্বাসন ব্যবস্থা',
    description: 'ইয়াবা আসক্তির বিরুদ্ধে লড়াইয়ে আমাদের সম্প্রদায়ে যোগ দিন। ব্যক্তিগত সহায়তা পান এবং আপনার পুনর্বাসন যাত্রা ট্র্যাক করুন।',
    images: ['https://cdn.example.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn">
      <body className={`${notoBengali.className} bg-gradient-to-br from-teal-50 to-purple-50 min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

