import React from 'react'

function ProjectComp() {
  return (
    <div className='w-full'>
      {/* Header */}
      <div className="w-[90%] sm:w-[80%] mx-auto flex justify-center items-center px-4 py-6">
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <h1 className="text-2xl sm:text-4xl tracking-wider text-gray-400 whitespace-nowrap">#projects</h1>
          <div className="w-full sm:w-[40%] h-[2px] bg-slate-400 mt-1 sm:mt-2" />
        </div>
      </div>

      {/* Projects Container */}
      <div className='w-[90%] sm:w-[80%] flex flex-wrap sm:flex-row justify-between items-center gap-8 mx-auto mt-6'>
        
        {/* Project Card */}
        {[1, 2].map((_, i) => (
          <div key={i} className='w-full sm:w-[30%] border-2 border-white  hover:duration-100>
+              hover:scale-105 transition-transform duration-300 ease-in-out'>
            <img
              src='/public/foodApp.jpg'
              alt='React Food App'
              className='w-full rounded-md'
            />
            <div className='w-full border-2 border-white'>
              <h1 className='text-lg sm:text-xl text-gray-300 font-bold mx-2 mt-2 mb-2 p-2'>
                React.js, style sheet, HTML, CSS, react-router-dom, Redux Toolkit
              </h1>
            </div>

            <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 px-4 gap-4'>
              <div className='w-full sm:w-1/2 bg-green-500 py-3 px-4 flex justify-center items-center rounded-lg'>
                <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>Visit</h1>
              </div>
              <div className='w-full sm:w-1/2 bg-blue-500 py-3 px-4 flex justify-center items-center rounded-lg'>
                <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>GitHub</h1>
              </div>
            </div>
          </div>
        ))}

        {/* Another Project */}
        <div className='w-full sm:w-[30%] border-2 border-white >
+              hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            src='/public/DiceGame.jpg'
            alt='Dice Game'
            className='w-full rounded-md'
          />
          <div className='w-full border-2 border-white'>
            <h1 className='text-lg sm:text-xl text-gray-300 font-bold mx-2 mt-2 mb-2 p-2'>
              React.js, Tailwind, HTML, CSS, react-router-dom, JavaScript
            </h1>
          </div>

          <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 px-4 gap-4'>
            <div className='w-full sm:w-1/2 bg-green-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>Visit</h1>
            </div>
            <div className='w-full sm:w-1/2 bg-blue-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>GitHub</h1>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-[30%] border-2 border-white >
+              hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            src='/public/DiceGame.jpg'
            alt='Dice Game'
            className='w-full rounded-md'
          />
          <div className='w-full border-2 border-white'>
            <h1 className='text-lg sm:text-xl text-gray-300 font-bold mx-2 mt-2 mb-2 p-2'>
              React.js, Tailwind, HTML, CSS, react-router-dom, JavaScript
            </h1>
          </div>

          <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 px-4 gap-4'>
            <div className='w-full sm:w-1/2 bg-green-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>Visit</h1>
            </div>
            <div className='w-full sm:w-1/2 bg-blue-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>GitHub</h1>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-[30%] border-2 border-white >
+              hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            src='/public/DiceGame.jpg'
            alt='Dice Game'
            className='w-full rounded-md'
          />
          <div className='w-full border-2 border-white'>
            <h1 className='text-lg sm:text-xl text-gray-300 font-bold mx-2 mt-2 mb-2 p-2'>
              React.js, Tailwind, HTML, CSS, react-router-dom, JavaScript
            </h1>
          </div>

          <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 px-4 gap-4'>
            <div className='w-full sm:w-1/2 bg-green-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>Visit</h1>
            </div>
            <div className='w-full sm:w-1/2 bg-blue-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>GitHub</h1>
            </div>
          </div>
        </div>

        <div className='w-full sm:w-[30%] border-2 border-white >
+              hover:scale-105 transition-transform duration-300 ease-in-out'>
          <img
            src='/public/DiceGame.jpg'
            alt='Dice Game'
            className='w-full rounded-md'
          />
          <div className='w-full border-2 border-white'>
            <h1 className='text-lg sm:text-xl text-gray-300 font-bold mx-2 mt-2 mb-2 p-2'>
              React.js, Tailwind, HTML, CSS, react-router-dom, JavaScript
            </h1>
          </div>

          <div className='w-full flex flex-col sm:flex-row justify-between items-center mt-4 mb-4 px-4 gap-4'>
            <div className='w-full sm:w-1/2 bg-green-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>Visit</h1>
            </div>
            <div className='w-full sm:w-1/2 bg-blue-500 py-3 px-4 flex justify-center items-center rounded-lg'>
              <h1 className='text-lg sm:text-xl font-bold text-gray-200 tracking-widest'>GitHub</h1>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProjectComp
