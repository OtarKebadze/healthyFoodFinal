import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './App.css';
import ItemDetailContainer from './Components/listContainer/itemDetailContainer';
import ItemListContainer from './Components/listContainer/ItemListContainer';
import Cart from "./Components/navbar/cart";
import NavBar from './Components/navbar/navbar';
import CartContextProv from "./context/cartContext";


function App() {
  return (
  <CartContextProv>
    <BrowserRouter>
    <div>
  <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer />}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/*" element={<Navigate to="/" replace />}/>  
    </Routes>
    </div>
    </BrowserRouter> 
  </CartContextProv>
  )
}

export default App;
