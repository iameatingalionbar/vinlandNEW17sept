'use client';

import React, { useState, useEffect } from 'react'

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    className={`h-6 w-6 text-white ${direction === 'left' ? 'transform rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function VideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videosLoaded, setVideosLoaded] = useState(0);
  const videos = [
    '/videos/kjoris-video.MP4',
    '/videos/bill-video.MP4',
    '/videos/bill2-video.mp4',
    '/videos/foto-video.mp4'
  ];

  useEffect(() => {
    console.log(`${videosLoaded} videos loaded`);
  }, [videosLoaded]);

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <section className="pt-16"> {/* Add padding-top here */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Myndbönd sem við höfum gert
        </h2>
        
        {/* Desktop view */}
        <div className="hidden md:flex md:justify-center md:space-x-4">
          {videos.map((video, index) => (
            <div key={index} className="w-1/5">
              <VideoPlayer src={video} index={index} setVideosLoaded={setVideosLoaded} />
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden relative">
          <VideoPlayer 
            src={videos[currentVideoIndex]} 
            index={currentVideoIndex} 
            setVideosLoaded={setVideosLoaded} 
          />
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button onClick={prevVideo} className="bg-black bg-opacity-50 p-2 rounded-full">
              <ArrowIcon direction="left" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button onClick={nextVideo} className="bg-black bg-opacity-50 p-2 rounded-full">
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function VideoPlayer({ src, index, setVideosLoaded }) {
  return (
    <div className="aspect-[9/16] relative bg-gray-800 rounded-2xl overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideosLoaded(prev => prev + 1)}
        onError={(e) => console.error(`Error loading video ${index + 1}:`, e)}
      />
    </div>
  )
}