// Components
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
  import Pagina1 from './pages/Pagina1'
  import Pagina2 from './pages/page2'
  import Page3 from './pages/Page3'
  import Page4 from './pages/Page4'
//.

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/interlaken-suica' element={<Pagina1 />}/>
          <Route path='/paris-franca' element={<Pagina2 />} />
          <Route path='/disney-eua' element={<Page3 />} /> 
          <Route path='/newyork-eua' element={<Page4/>} />         
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
