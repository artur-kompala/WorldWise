import AppNav from '../AppNav/AppNav'
import Footer from '../Footer/Footer'
import Logo from '../Logo/Logo'
import styles  from './SideBar.module.css'


function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo></Logo>
            <AppNav></AppNav>
            <p>List of cities</p>
            <Footer></Footer>
        </div>
    )
}

export default SideBar
