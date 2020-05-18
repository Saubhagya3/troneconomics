import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby' 
import equityStyles from './equity.module.scss'
import Head from '../components/head'

const EquityPage = () => {
    const pageTitle = "Equity"
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: {
              fields:publishedDate,
              order:DESC
            }
          ){
            edges {
              node {
                title
                slug
                publishedDate (formatString: "MMMM Do, YYYY")
                summary
                page
                image {
                    title
                    resize (width: 450, height: 180) {
                      src
                    }
                }
              }
            }
          }
    }
    `)
    return(
        <Layout>
            <Head title='Equity'/>
            <h1 className={equityStyles.equityTitle}>Equity</h1>
            <ol className={equityStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return(
                        edge.node.page === "equity" ? (
                            <li className={equityStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <div>
                                        <img
                                        src={edge.node.image.resize.src}
                                        alt={edge.node.image.title}
                                        />
                                    </div>
                                    <h2>{edge.node.title}</h2>
                                    <p className={equityStyles.date}>{edge.node.publishedDate}</p>
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

export default EquityPage