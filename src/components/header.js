import React from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import window from 'global'
import { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <MobileHeader />
            <DesktopHeader />
        </Fragment>
    )
}        

export default Header