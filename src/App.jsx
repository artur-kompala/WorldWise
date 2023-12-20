import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import AppLayout from "./pages/AppLayout/AppLayout"
import Product from "./pages/Product/Product"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login/Login"
import Pricing from "./pages/Pricing"
import CityList from "./components/CityList/CityList"
import CountryList from "./components/CountryList/CountryList"

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/Pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/app" element={<AppLayout></AppLayout>}>
          <Route index element={<CityList></CityList>}></Route>
          <Route path="cities" element={<CityList></CityList>}></Route>
          <Route path="countries" element={<CountryList></CountryList>}></Route>
          <Route path="form" element={<Form></Form>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
