import Footer from "./Components/Footer/Footer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/Detail/ItemDetailContainer.jsx";
import Form from "./Components/Form/Form.jsx";
import CartContextProvider from "./Context/CartContext.jsx";
import ItemListenContainer from "./Components/List/ItemListContainer/ItemListenContainer.jsx";


function App() {
  return (
    <div className="bgApp" >

    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        
        {/* <Category /> */}
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<ItemListenContainer />} />
          <Route path="/category/:id" element={<ItemListenContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>error 404: Not found</h1>} />
        </Routes>
      </CartContextProvider>
      
    </BrowserRouter>
        < Footer/>
    </div>
  );
}

export default App;
