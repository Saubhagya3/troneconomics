import React from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import useWindowSize from '@react-hook/window-size/throttled'

const Header = () => {
    const [ width ] = useWindowSize()
    
    return width > 550 ? <DesktopHeader /> : <MobileHeader />
}        

export default Header