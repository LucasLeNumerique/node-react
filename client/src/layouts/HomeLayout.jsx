import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="px-2 max-w-[1250px] mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>

    )
}

export default HomeLayout