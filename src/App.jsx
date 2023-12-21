import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import AppLayout from "./pages/AppLayout/AppLayout"
import Product from "./pages/Product/Product"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/Login/Login"
import Pricing from "./pages/Pricing"
import CityList from "./components/CityList/CityList.jsx"
import CountryList from "./components/CountryList/CountryList"
import City from "./components/City/City.jsx"
import Form from "./components/Form/Form.jsx"
import { CitiesProvider } from "./contexts/CitiesContext.jsx"




function App() {

  

  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/pricing" element={<Pricing></Pricing>}></Route>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/app" element={<AppLayout></AppLayout>}>
              <Route index element={<Navigate replace to='cities'></Navigate>}></Route>
              <Route path="cities" element={<CityList></CityList>}></Route>
              <Route path="cities/:id" element={<City></City>}></Route>  
              <Route path="countries" element={<CountryList></CountryList>}></Route>
              <Route path="form" element={<Form></Form>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  )
}

export default App
