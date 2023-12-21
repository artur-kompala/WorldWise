import styles from './CountryList.module.css'
import Spinner from '../Spinner/Spinner'
import CountryItem from '../CountryItem/CountryItem'
import Message from '../Message/Message'

function CountryList({isLoading,cities}) {
    
    if(isLoading) return <Spinner></Spinner>

    if(!cities.length) return <Message message='Add your first cities by clicking on a city on the map'></Message>
    const countries = cities.reduce((arr,city)=>{
        if(!arr.map(el=>el.country).includes(city.country))
        return [...arr,{country: city.country,emoji: city.emoji}]
        else return arr
    },[])

    return (
        
        <ul className={styles.countryList}>
            {countries?.map(country => <CountryItem key={country.id} country={country}></CountryItem>)}
        </ul>
        
       
    )
    
}

export default CountryList
