import React from 'react'

export default function Story() {
  return (
    <section className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/images/story-image.jpg" 
            alt="Our Story" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Okkar saga</h2>
         
          <p className="text-gray-300">
            <span className="text-white">Eftir miklar vinsældir á tiktok og yfir 10 milljón sameiginleg íslensk áhorf</span>
            {" "}höfum við ákveðið að nýta okkar reynslu til þess að hjálpa fyrirtækjum að auglýsa sig á samfélagsmiðlum. Okkar ástríða er að gera myndbönd sem eru vel gerð og grípa athygli fólks.
          </p>
        </div>
      </div>
    </section>
  )
}