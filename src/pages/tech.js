import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import techStyles from './tech.module.scss'
import Head from '../components/head'

const TechPage = () => {
    const pageTitle = "Tech"
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                  fields:publishedDate,
                  order:DESC
                }
              ) {
                edges {
                    node {
                        title
                        publishedDate(formatString: "MMMM Do, YYYY")
                        page
                        summary
                        slug
                    }
                }
            }
        }
    `)

    return(
        <Layout>
            <Head title= "Tech"/>
            <h1 className={techStyles.techTitle}>Technology</h1>
            <ol className={techStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                        edge.node.page === "tech" ? (
                            
                                <li className = {techStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                        <p className={techStyles.date}>{edge.node.publishedDate}</p>
                                        <p>{edge.node.summary}</p>
                                    </Link>
                                    <br/>
                                </li>
                            
                        ) : ("") 
                    )
                })}
                
            </ol>
        </Layout>
    )
}

export default TechPage