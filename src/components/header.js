import React, { useState, useEffect } from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import useWindowSize from '@react-hook/window-size/throttled'

const Header = () => {
    const [ width ] = useWindowSize()
    const [ winWidth, setWinWidth] = useState(width);
    const breakpoint = 550;

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