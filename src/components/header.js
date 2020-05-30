import React from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import window from 'global'

const Header = () => {
    return window.innerWidth > 550 ?  <DesktopHeader /> : <MobileHeader />
}        

export default Header