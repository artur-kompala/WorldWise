import { BrowserRouter, Route, Routes } from "react-router-dom"
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
import { useEffect,useState } from "react"

const BASE_URL = 'http://localhost:8000'

function App() {

  const [cities,setCities] = useState([])
  const [isLoading,setIsLoading] = useState(false)

  useEffect(()=>{
    async function fetchCities(){
    try{
      setIsLoading(true)
      const res = await fetch(`http://localhost:8000/cities`)
      const data = await res.json()
      setCities(data) 
    }catch{
      alert('There was an error loading data')
    }finally{
      setIsLoading(false)
    }
  }
  fetchCities();
  },[])
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/Pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/app" element={<AppLayout></AppLayout>}>
          <Route index element={<CityList cities={cities} isLoading={isLoading}></CityList>}></Route>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}></CityList>}><Route/>
          <Route path="cities/:id" element={<City></City>}></Route>  
          </Route>
          <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}></CountryList>}></Route>
          <Route path="form" element={<Form></Form>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
