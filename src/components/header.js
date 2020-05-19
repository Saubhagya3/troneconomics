import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        page
                    }
                }
            }
        }
    `) 
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.banner}>
                <h1 style={{color: '#4ca34c'}}>
                    <Link className={headerStyles.title} to="/">
                        {data.site.siteMetadata.title}
                    </Link>. 
                </h1>
                
            </div>
            <div className={headerStyles.mainnav}> 
                <div className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <h3><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/economy" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Economy</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/equity" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Equity</Link></h3>
                    </li>
                    <li>
                        <h3><Link to="/tech" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Tech</Link></h3>
                    </li>
                </ul>
                </div>
                <div className={headerStyles.login}>
                    <p><a href="#">Sign In</a> | <a href="#">Subscribe</a></p>
                </div>
            </div>
            
        </header>
    )
}

export default Header