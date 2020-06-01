import React, { useState } from 'react'
import { Link } from 'gatsby'
import mobileHeaderStyles from './mobileHeader.module.scss'
import menuIcon1 from '../images/menu-icon.png'
import menuIcon2 from '../images/close-menu-icon.png'
import { useEffect } from 'react'

const MobileHeader = () => {
    const [ mnavList, setMNavList ] = useState(mobileHeaderStyles.mnavList)
    const [ mNav, setMNav] = useState(mobileHeaderStyles.mNav)
    const [ sideText, setSideText ] = useState(menuIcon1)
    const  [ mclicked, setMClicked ] = useState(false)

    const handleSideBarClick = () => {
        setMClicked(!mclicked)
        mclicked ? setMNav(mobileHeaderStyles.mNav) : setMNav(mobileHeaderStyles.mNav2)
        mclicked ? setMNavList(mobileHeaderStyles.mnavList) : setMNavList(mobileHeaderStyles.mnavList2)
        mclicked ? setSideText(menuIcon1) : setSideText(menuIcon2)
    }

    const handleOutClick = () => {
        setMNav(mobileHeaderStyles.mNav)
        setMNavList(mobileHeaderStyles.mnavList)
        setSideText(menuIcon1)
    }

    return(
        <header className={mobileHeaderStyles.mheader}>
            <div className={mobileHeaderStyles.mmain}>
                <div className={mobileHeaderStyles.msidebarButton} onClick={handleSideBarClick}>
                    <img 
                        src={sideText} 
                        style={{height: "2.2rem", width: "2.2rem", margin:'0', padding: '0'}}
                    />
                </div>
                <div className={mobileHeaderStyles.mtitle}><h1><Link to='/'>TronEcon.</Link></h1></div>
            </div>
            <nav className={mNav} onClick={handleOutClick}>
                <ul className={mnavList}>
                    <li>
                        <h3><Link to="/" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.mactiveNavItem}>Home</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/economy" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.activeMNavItem}>Economy</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/equity" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.activeMNavItem}>Equity</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/tech" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.activeMNavItem}>Tech</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/about" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.activeMNavItem}>About</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/contact" className={mobileHeaderStyles.mnavItem} activeClassName={mobileHeaderStyles.activeMNavItem}>Contact</Link></h3>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MobileHeader