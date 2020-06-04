import React, { Fragment, useEffect } from 'react'
import MobileHeader from './mobileHeader'
import DesktopHeader from './desktopHeader'
import ReactGa from 'react-ga'

const Header = () => {
    useEffect(()=>{
        ReactGa.initialize('UA-168456053-1')

        //report page view
        ReactGa.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <Fragment>
            <MobileHeader />
            <DesktopHeader />
        </Fragment>
    )
}        

export default Header