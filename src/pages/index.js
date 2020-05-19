import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'
import Head from '../components/head'
import Image from '../templates/image'

export const pageTitle = "Index"

const IndexPage = () => {
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
                body {
                    json
                }
                image {
                    title
                    resize (width: 450, height: 210) {
                      src
                    }
                  }
              }
            }
          }
    }
    `)
    return(
        <Layout >
            <Head title="Home"/>
            <div className={indexStyles.table}>
            <div className={indexStyles.middle}>
                    <ol className={indexStyles.posts}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === 'breaking' ? 
                                <li className={indexStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            />
                                        </div>
                                        <h2>{edge.node.title}</h2>
                                        <p className={indexStyles.date}>{edge.node.publishedDate}</p>
                                        <p>{edge.node.summary}</p>
                                    </Link>
                                    <br/>
                                </li> : ("")
                            )
                        })}
                    </ol>
                </div>
                <div className={indexStyles.left}>
                    <ol className={indexStyles.posts}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === "general" ?
                                <li className={indexStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div className= {indexStyles.leftImg}>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            />
                                        </div>
                                        <h2>{edge.node.title}</h2>
                                    </Link>
                                    <br/>
                                </li> : ("")
                            )
                        })}
                    </ol>
                </div>
                <div className={indexStyles.right}>
                    <ol className={indexStyles.posts}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(
                                <li className={indexStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>Item</h2>
                                    </Link>
                                    <br/>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
            <br/>
            <br/>
        </Layout>
    )
}

export default IndexPage