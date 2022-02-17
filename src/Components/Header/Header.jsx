import Burger from "../Burger/Burger";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import style from "./Header.module.scss";
import React, { useEffect, useState } from "react";


function Header(props) {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50)
        })
    }, []);
    return (
        <header className={scroll ? `${style.scroll}` : `${style.header}`}>
            <div className="container">
                <div className={style.inner}>
                    <Logo />
                    <Nav />
                    <Burger />
                </div>
            </div>
        </header>
    )
}

export default Header;