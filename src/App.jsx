import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AppLayout from "./pages/AppLayout"
import Product from "./pages/Product"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login"
import Pricing from "./pages/Pricing"

function App() {
 
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/Pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/app" element={<AppLayout></AppLayout>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
