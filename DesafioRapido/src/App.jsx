// Components
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
//.

// Style
  import './App.css'
//.

// Pages
  import Home from './pages/Home'
  import Pagina1 from './pages/Page1'
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
          <Route path='/macarrao' element={<Pagina1 />}/>
          <Route path='/pizza' element={<Pagina2 />} />
          <Route path='/hamburguer' element={<Page3 />} /> 
          <Route path='/contato' element={<Page4/>} />         
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
