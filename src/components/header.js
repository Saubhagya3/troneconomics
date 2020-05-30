import React, { useState, useEffect } from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import useWindowSize from '@react-hook/window-size/throttled'

const Header = () => {
    const [ winWidth, setWinWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => setWinWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return winWidth > breakpoint ? 
        <DesktopHeader />
        :
        <MobileHeader />
}        

export default Header