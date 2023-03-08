import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Cart, Navbar, Products } from './components/allComponents';
import productsData from './utils/productsData'



function App() {

  const[products, setProducts] = useState(productsData)

  function searchItems(e) {
    let filterArr = []

    console.log(e.target.value)
     productsData.filter(item => {
      if(item.title.toLowerCase() === e.target.value.toLowerCase()) {
        return filterArr.push(item)
      }
    })

    setProducts(filterArr)
    console.log()
  }

  return (
    <BrowserRouter>
    <Navbar searchItems={searchItems} />
      <Routes>
        <Route path='/' exact element={ <Products productsData={products} /> } />
        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
