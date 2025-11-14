import React from 'react'
import man from "/src/assets/images/man.jpg"

function YourJourney() {
  return (
    <div className="w-full bg-white py-16 px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold  text-gray-500 uppercase mb-2">CODING NINJAS ADVANTAGE</p>
        <h1 className="text-3xl font-semibold text-gray-900">With you throughout your Journey</h1>
      </div>

      {/* Content: Image Left, List Right */}
      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={man} 
            alt="Cartoon Man" 
            className="w-full h-[380px] object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* List */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <ul className="space-y-16 text-gray-800 text-xl leading-relaxed px-16">
            <li>
              <span className="font-semibold">Get certified</span> by one of India's premier institutes
            </li>
            <li>
              <span className="font-semibold">Teaching assistant</span> available 7 days a week
            </li>
            <li>
              Video and <span className="font-semibold">chat support</span> available
            </li>
            <li>
              Personalised guidance from <span className="font-semibold">relationship managers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default YourJourney
