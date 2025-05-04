import {BrowserRouter , Routes , Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
  
  return (
  
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
