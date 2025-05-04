import React from 'react';

function IntroComp() {
  return (
    <div className='w-full flex justify-center my-8'>
      <div className='w-[90%] md:w-[80%] py-4 flex flex-col md:flex-row items-center justify-between gap-6'>

        <div className='overflow-hidden rounded-full w-80 h-80 md:w-[400px] md:h-[400px]'>
          <img 
            className='object-cover object-center'
            src='/amitBest.jpg'
            alt='Amit picture'
          />
        </div>

        <div className='w-full md:w-[50%] flex flex-col items-start justify-start px-4 py-2 rounded-md'>
          <p className='text-gray-500 text-2xl md:text-2xl text-left leading-relaxed font-poppins tracking-wider'>
            I am <span className='text-red-600 text-3xl font-semibold'>Amit Kumar</span>, a <span className='text-red-600 text-3xl font-semibold'>Software Engineer</span> with 1+ years of hands-on experience in both web and mobile application development. I specialize in React.js and React Native, with a working knowledge of Node.js, Express, and SQL. I have contributed to building scalable, user-friendly applications across platforms.
          </p>

          <div className='mt-8'>
            <a
              href='/public/files/AmitResumeFrontendDeveloper.pdf'  
              download
              className='bg-red-600 text-white py-2 px-6 rounded-md text-lg md:text-xl font-semibold hover:bg-red-700 transition duration-200'>
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default IntroComp;
