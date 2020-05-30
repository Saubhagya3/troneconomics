import React, { useState } from 'react'
import { Link } from 'gatsby'
import mobileHeaderStyles from './mobileHeader.module.scss'
import menuIcon1 from '../images/menu-icon.png'
import menuIcon2 from '../images/close-menu-icon.png'

const MobileHeader = () => {
    const [ navList, setNavList ] = useState(mobileHeaderStyles.navList)
    const [ sideText, setSideText ] = useState(menuIcon1)
    const  [ clicked, setClicked ] = useState(false)
    const handleSideBarClick = () => {
        setClicked(!clicked)
        clicked ? setNavList(mobileHeaderStyles.navList) : setNavList(mobileHeaderStyles.navList2)
        clicked ? setSideText(menuIcon1) : setSideText(menuIcon2)
    }

    return(
        <header>
            <div className={mobileHeaderStyles.main}>
                <div className={mobileHeaderStyles.sidebarButton} onClick={handleSideBarClick}>
                    <img src={sideText} style={{height: "2rem", width: "2.4rem"}}/>
                </div>
                <div className={mobileHeaderStyles.title}><h1><Link to='/'>TronEcon.</Link></h1></div>
            </div>
            <nav>
                <ul className={navList}>
                    <li>
                        <h3><Link to="/" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>Home</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/economy" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>Economy</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/equity" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>Equity</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/tech" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>Tech</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/about" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>About</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/contact" className={mobileHeaderStyles.navItem} activeClassName={mobileHeaderStyles.activeNavItem}>Contact</Link></h3>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MobileHeader