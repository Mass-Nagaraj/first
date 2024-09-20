
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ScrollToTop } from 'react-router-dom';
import './App.css'
import Home from './componants/Home'

function App() {

  return (
    <BrowserRouter>   
    {/* <ScrollToTop/>    */}
        <Routes>
              <Route path='/' element={<Home/>} />    
        </Routes>
    </BrowserRouter>

  )
}

export default App
