'use client'

import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/mvgpngwq', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('Takk fyrir að hafa samband!')
        form.reset()
      } else {
        setStatus('Úps! Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur.')
      }
    } catch (error) {
      setStatus('Úps! Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur.')
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-white">
            <h2 className="text-3xl font-bold mb-4">Hafa Samband</h2>
            <p className="mb-6">
              Sendu á okkur hjá Vinland Media til þess að auka útbreiðslu þíns fyrirtækis á samfélagsmiðlum með hjálp fagmanna.
            </p>
            <p className="mb-2">Sími: 6992021 eða 7796205</p>
            <p>Netfang: contact@vinlandmedia.is</p>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 md:pl-8">
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="mb-4">
                <input type="text" name="name" placeholder="Nafn" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300" required />
              </div>
              <div className="mb-4">
                <input type="email" name="email" placeholder="Netfang" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300" required />
              </div>
              <div className="mb-4">
                <textarea name="message" placeholder="Skilaboð" className="w-full p-2 border rounded bg-transparent text-white placeholder-gray-300" rows={4} required></textarea>
              </div>
              <button type="submit" className="bg-[#790f0e] text-white py-2 px-4 rounded hover:bg-[#5f0c0b] transition duration-300">Senda</button>
              {status && <p className="mt-4 text-white">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}