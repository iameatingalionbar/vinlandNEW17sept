import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 bg-opacity-50 text-white py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Vinland Media</Link>
        </div>
        <nav>
          
        </nav>
      </div>
    </header>
  )
}