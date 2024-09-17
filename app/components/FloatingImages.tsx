import React from 'react'
import Image from 'next/image'

const FloatingImages = () => {
  const images = [
    '/images/ideas.png',
    '/images/processing.png',
    '/images/publishing.png',
    '/images/recording.png',
    '/images/research.png',
  ]

  return (
    <div className="relative h-48 flex justify-center">
      {images.map((src, index) => (
        <div 
          key={src} 
          className={`absolute w-20 h-20 animate-float-${index + 1}`}
          style={{
            left: `calc(50% + ${(index - 2) * 85}px)`,
            animationDelay: `${index * 0.5}s`
          }}
        >
          <Image src={src} alt="Process Icon" width={80} height={80} />
        </div>
      ))}
    </div>
  )
}

export default FloatingImages
