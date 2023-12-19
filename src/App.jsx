import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Project6Shopping/Components/Home'
import Cart from './Project6Shopping/Components/Cart';
import Navbar from './Project6Shopping/Components/Navbar';
import About from './Project6Shopping/Components/About';
import Data from './Project6Shopping/Data'
import Intro from './Project6Shopping/Components/Intropage'


const App = () => {

  const [data, setData] = useState(Data);
  const [search, setSearch] = useState("");
  const [cart,setCart] = useState([]);

  function handleClick(item){
      setCart([...cart,item])
  }
  return(
      <section className="app">
          <BrowserRouter>
              <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData} Data={Data}/>
              <Routes>
                  <Route path='/e-commerce' element={<Intro handleClick={handleClick}/>}/>
                  <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>}/>
                  <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
                  <Route path='/about/:aboutId' element={<About Data={Data} handleClick={handleClick} />}/>
              </Routes>
          </BrowserRouter>
          
          
      </section>
  )
}
export default App;