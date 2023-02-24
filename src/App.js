import Footer from "./Components/Footer/Footer.jsx";
import ItemListenContainer from "./Components/ItemListContainer/ItemListenContainer.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListenContainer greeting={"props de ItemListenContainer"} />
      <ProductCard title={"producto 1"} price={200} />
      <ProductCard title={"producto 2"} price={300} />
      <Footer />
    </div>
  );
}

export default App;
