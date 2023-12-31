import { createContext,useState,useEffect, useContext } from "react";

const BASE_URL = 'http://localhost:8000'
const CitiesContext = createContext()

function CitiesProvider({children}){
    
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


  return <CitiesContext.Provider value={{cities,isLoading}}>{children}</CitiesContext.Provider>
}
function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw Error('Cities context was used outside CitiesProvider')
    return context;
}

export {CitiesProvider,useCities}