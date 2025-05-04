import React from 'react'
import Header from "../components/Header"
import IntroComp from '../components/IntroComp'
import ProjectComp from '../components/ProjectComp'
import AchievementComp from '../components/AchievementComp'



function HomePage() {
  return (
    <div className='w-full  bg-gradient-to-r from-blue-900 to-gray-900'>
      <Header />
      <IntroComp />
      <ProjectComp />
      <AchievementComp />
      

    </div>
  )
}

export default HomePage