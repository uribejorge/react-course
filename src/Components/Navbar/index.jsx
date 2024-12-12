import { NavLink } from "react-router-dom"

const navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                    Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                    Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/eletronisc'>
                    Eletronisc
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>
                    Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                    Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                    Others
                    </NavLink>
                </li>
                <li>
                    jouribero@cesde.net
                </li>
                <li>
                    <NavLink to='/my-Orders'>
                    MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-Account'>
                    My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Sign-in'>
                    Sign In
                    </NavLink>
                </li>
                <li>
                🛒
                </li>
            </ul>
        </nav>
    )
}

export default navbar