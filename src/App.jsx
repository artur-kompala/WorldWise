import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AppLayout from "./pages/AppLayout"
import Product from "./pages/Product"
import PageNotFound from "./pages/PageNotFound"
import PageNav from "./components/pageNav"

function App() {
 
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product></Product>}></Route>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/app" element={<AppLayout></AppLayout>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
