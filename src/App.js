import Footer from "./Components/Footer/Footer.jsx";
import ItemListenContainer from "./Components/ItemListContainer/ItemListenContainer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import ItemCount from "./Components/ItemCount/ItemCount.jsx";
import ConsumiendoApi from "./Components/ConsumiendoApi/ConsumiendoApi.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./Components/Cart/Cart.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";

function App() {
  const onAdd = (cantidad) => {
    console.log(`se agrego ${cantidad} elementos  al carrito`);
  };
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListenContainer />} />
        <Route path="/category/:id" element={<ItemListenContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>error 404: Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
