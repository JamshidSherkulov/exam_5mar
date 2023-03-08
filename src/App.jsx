import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Navbar, Products } from './components/allComponents';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' exact element={ <Products /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
