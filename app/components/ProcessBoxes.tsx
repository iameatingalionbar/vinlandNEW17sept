import React from 'react'
import Image from 'next/image'

interface Process {
  name: string;
  imageSrc: string;
  description: string;
}

export default function ProcessBoxes() {
  const processes: Process[] = [
    { 
      name: "Rannsókn", 
      imageSrc: "/images/research.png",
      description: "Kynnum okkur fyrirtækið og viðeigandi markhóp."
    },
    { name: "Hugmyndir", imageSrc: "/images/ideas.png", description: "Finnum góðar og skemmtilegar hugmyndir sem henta markhópi fyrirtækisins." },
    { name: "Upptökur", imageSrc: "/images/recording.png", description: "Tökum upp hágæða myndbönd sem fanga athygli áhorfenda." },
    { name: "Úrvinnsla", imageSrc: "/images/processing.png", description: "Nýtum gríðarlega reynslu í úrvinnslu myndbandanna." },
    { name: "Birting", imageSrc: "/images/publishing.png", description: "Birtum myndbandið með leyfi fyrirtækisins." }
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processes.map((process, index) => (
            <div key={index} className="flip-card aspect-square">
              <div className="flip-card-inner w-full h-full">
                <div className="flip-card-front bg-white bg-opacity-20 p-4 text-center shadow-md text-white rounded-lg flex flex-col justify-between">
                  <div className="flex-grow flex items-center justify-center">
                    <div className="relative w-3/4 aspect-square">
                      <Image 
                        src={process.imageSrc} 
                        alt={process.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mt-2">{process.name}</h3>
                </div>
                <div className="flip-card-back bg-white bg-opacity-20 p-4 text-center shadow-md text-white rounded-lg flex items-center justify-center">
                  <p>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}