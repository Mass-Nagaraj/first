
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ScrollToTop } from 'react-router-dom';
import './App.css'
// import Home from './componants/Home'
import Index_cart from './componants';

function App() {

  return (
    <BrowserRouter>   
    {/* <ScrollToTop/>    */}
        <Routes>
              <Route path='/' element={<Index_cart/>} />    
        </Routes>
    </BrowserRouter>

  )
}

export default App
