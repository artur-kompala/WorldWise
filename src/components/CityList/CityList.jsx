import styles from './CityList.module.css'
import Spinner from '../Spinner/Spinner'
import CityItem from '../CityItem/CityItem'
import Message from '../Message/Message'
import { useCities } from '../../contexts/CitiesContext'



function CityList() {
    
    const {isLoading,cities} = useCities();

    if(isLoading) return <Spinner></Spinner>

    if(!cities.length) return <Message message='Add your first city by clicking on a city on the map'></Message>

    return (
        
        <ul className={styles.cityList}>
            {cities?.map(city => <CityItem key={city.id} city={city}></CityItem>)}
        </ul>
        
       
    )
}

export default CityList
