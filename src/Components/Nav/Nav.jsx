import style from './Nav.module.scss'
import NavItem from './NavItem/NavItem';

function Nav() {
    return (<nav className={style.nav}>

        <NavItem href="/project" name='О проекте' />
        <NavItem href="/medic" name='Врачам' />
        <NavItem href="/blog" name='Чем полезно' />
        <NavItem href="/contacts" name='Контакты' />
    </nav>);
}

export default Nav;