
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import ProductDetailpage from "./Pages/ProductDetailpage";
function App() {
  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/Product_details/:productSlug" element={<ProductDetailpage/>}/>
  </Routes>
    </>
   
  );
}

export default App;
