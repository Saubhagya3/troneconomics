import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as economyStylesModule from './economy.module.scss'
import Head from '../components/head'

const EconomyPage = () => {
    const economyStyles = economyStylesModule.default || economyStylesModule

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: { publishedDate: DESC }
              ){
                edges {
                  node {
                    title
                    slug
                    publishedDate (formatString: "MMMM Do, YYYY")
                    summary {
                      summary
                    }
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
            <Head title="Economy"/>
            <h1 className={economyStyles.econTitle}>Economy</h1>
            <ol className={economyStyles.posts}>
                {/* the array list is on edges not the frontmatter */}
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return(
                        edge.node.page === "economy" ? 
                        (<li className={economyStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                              <img
                              src={edge.node.image.resize.src}
                              alt={edge.node.image.title}
                              />
                            </Link>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                            </Link>
                            <p className={economyStyles.date}>{edge.node.publishedDate}</p>
                            <p>{edge.node.summary?.summary}</p>
                            
                            <br/>
                        </li>) : ("")
                        
                    )
                })}
            </ol>
        </Layout>
    )
}

export default EconomyPage
