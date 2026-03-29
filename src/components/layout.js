import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import * as layoutStylesModule from './layout.module.scss'

const Layout = (props) => {
    const layoutStyles = layoutStylesModule.default || layoutStylesModule

    return(
        <div className={layoutStyles.main}>
            <div className={layoutStyles.container}>
                <Header />
                
                <div className={layoutStyles.content}>
                    
                    {props.children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout
