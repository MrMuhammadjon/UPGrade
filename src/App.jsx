import { Outlet } from "react-router-dom"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { AppContextProvider } from "./Context/AppContext"


const App = () => {
    return (
        <>
            <AppContextProvider>
                <Navbar />
                <Outlet />
                <Footer />
            </AppContextProvider>
        </>
    )
}

export default App


