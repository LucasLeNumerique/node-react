import { NavLink } from "react-router"

const Header = () => {
    return (
        <header>
            <nav className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-x-2">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Projects</NavLink>
                    <NavLink to='/people'>People</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header