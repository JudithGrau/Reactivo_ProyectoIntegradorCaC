import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Products } from './components/Pages/Products/Products';
import { About } from './components/Pages/About/About';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Pages/Home/Home';

import './App.css';


const App = () => {
  
  //const container = 'flex flex-col items-center';

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/productos' element={ <Products/> } />
          <Route path='/nosotros' element={ <About /> } />
          <Route path='*' element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;