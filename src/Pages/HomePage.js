import React from 'react'
import '../images/forest.jpg'

export default function HomePage() {
  return (
    <div>
    
        <div >
        
            <img src={require('../images/forest.jpg')} alt="forest" className="w-full h-full position: absolute"/>
            </div>

            <body class="p-10">
    <div class="relative">
       
        <h1 class="absolute text-5xl text-amber-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-20 title-font">
            Magic and Swords</h1>
        <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2"></h2>
        <h3 class="absolute text-2xl text-blue-300 top-5 left-5"></h3>
        
    </div>
</body>
    </div>
  )
}
