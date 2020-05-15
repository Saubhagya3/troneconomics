import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return(
        <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <h2>This is Tron Economics dedicated to all things economics and tech.</h2>
            <p>Please stay tuned for more content in the near future.</p>
            <p>Want to know my details? <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage