import React from 'react'
import Story from './components/Story'
import ProcessBoxes from './components/ProcessBoxes'
import VideoSection from './components/VideoSection'
import ContactForm from './components/ContactForm'
import FloatingImages from './components/FloatingImages'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-16 text-center"> {/* Increased top padding */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Hámarkaðu útbreiðslu þína
        </h1>
        <h2 className="text-2xl md:text-3xl text-white mb-8">
          með sérfræðingum í samfélagsmiðlum
        </h2>
        <div className="mt-6"> {/* Reduced margin-top */}
          <FloatingImages />
        </div>
      </div>
      <VideoSection /> {/* Removed the wrapper div with mt- class */}
      <ProcessBoxes />
      <Story />
      <ContactForm />
    </div>
  )
}