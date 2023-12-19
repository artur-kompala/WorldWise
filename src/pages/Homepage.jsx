import { Link } from "react-router-dom"
import PageNav from "../components/pageNav"
import AppNav from "../components/AppNav"

function Homepage() {
    return (
        <div>
            <PageNav></PageNav>
            <AppNav></AppNav>
           <h1>WorldWise</h1>
           <Link to="/app">Go to the app</Link>
        </div>
    )
}

export default Homepage
