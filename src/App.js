import { Routes, Route } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import NavigationBar from "./components/Navbars";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Routes>
       <Route path="/products" element={<Products />}>
            
             <Route path=':name' element={<ProductDetails/>}/>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
