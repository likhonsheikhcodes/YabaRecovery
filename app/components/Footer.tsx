export default function Footer() {
  return (
    <footer className="bg-indigo-800 p-4 text-white mt-8">
      <div className="container mx-auto text-center">
        <p className="text-xl font-bold mb-2">Support Our Mission</p>
        <p className="mb-4">Help us continue supporting addicted people worldwide</p>
        <p className="bg-white text-indigo-800 p-2 rounded inline-block mb-4">
          Donate ETH: 0x9EfC550Bd9CD2790625FE84cfEf845d495198fA1
        </p>
        <p>24/7 Support Hotline: 16600</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Modern Yaba Recovery System. All rights reserved.</p>
      </div>
    </footer>
  )
}

