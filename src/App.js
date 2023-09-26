import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About"
import ItemList from "./Components/ItemList";
import PageError from "./Components/PageError";
import Login from "./Components/Login";
import ProductDetail from "./Components/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageError />} />
        <Route path="/" element={<Login />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/item" element={<ItemList />} />
        <Route path="/item/:productId" element={<ProductDetail/>}/>
      </Routes>
    </>
  );
}

export default App;

// import About from "./Components/About";
// <Route path="/about" element={<About />} />
