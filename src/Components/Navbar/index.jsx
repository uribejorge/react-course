import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-5 text-sm font-light">
            {/* Grupo Izquierdo */}
            <ul className="flex items-center space-x-4 gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>Shopi</NavLink>
                </li>
                <li>
                    <NavLink to='/'>All</NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>Furnitures</NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>Toys</NavLink>
                </li>
                <li>
                    <NavLink to='/others'>Others</NavLink>
                </li>
            </ul>

            {/* Grupo Derecho */}
            <ul className="flex items-center space-x-4 gap-3">
                <li>jouribero@cesde.net</li>
                <li>
                    <NavLink to='/my-orders'>My Orders</NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>Sign In</NavLink>
                </li>
                <li>🛒</li>
            </ul>
        </nav>
    );
};

export default Navbar;
