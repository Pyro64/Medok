import style from './NavItem.module.scss'
import { NavLink } from "react-router-dom";

function NavItem(props) {
    return (
        <NavLink to={props.href} className="nav__link">{props.name}</NavLink>
    );
}

export default NavItem;