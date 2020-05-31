import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import indexStyles from './index.module.scss'
import Head from '../components/head'
import TopPost from '../components/topPost'
import BreakingPost from '../components/breakingPost'

const IndexPage = () => {
    const [ middle, setMiddle ] = useState(indexStyles.middle)
    const [ left, setLeft ] = useState(indexStyles.left)
    const [ buttonText, setButtonText ] = useState('Show More')
    const [ clicked, setClicked ] = useState(false)

    const onClick1 = () => {
        setClicked(!clicked)
        clicked ? setButtonText('Show More') : setButtonText('Show Less')
        clicked ? setMiddle(indexStyles.middle) : setMiddle(indexStyles.middle2)
        clicked ? setLeft(indexStyles.left) : setLeft(indexStyles.left2)
    }

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
                    resize (width: 480, height: 500) {
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
            <TopPost />
            <BreakingPost />
            <div className={indexStyles.table}>
                <div className={middle}>
                    <ol className={indexStyles.posts}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === 'general left' ||
                                edge.node.page === 'economy' ?
                                <li className={indexStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div className={indexStyles.image}>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            />
                                        </div>
                                    </Link>
                                    <p className={indexStyles.pageTitle}>{edge.node.page}</p>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                    </Link>
                                    <p>{edge.node.summary}</p>
                                    <p className={indexStyles.date}>{edge.node.publishedDate}</p>
                                    
                                    <br/>
                                </li> : ("")
                            )
                        })}
                    </ol>
                </div>
                <div className={left}>
                    <ol className={indexStyles.posts}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === "general right" ||
                            edge.node.page === "tech" ||
                            edge.node.page === "equity" ?
                                <li className={indexStyles.post}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div className= {indexStyles.leftImg}>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            style={{width:'100%'}}
                                            />
                                        </div>
                                    </Link>
                                    <p className={indexStyles.pageTitle}>{edge.node.page}</p>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                    </Link>
                                    <p>{edge.node.summary}</p>
                                    <p className={indexStyles.date}>{edge.node.publishedDate}</p>
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
                                    <Link to='#'>
                                        <h2>Graph Item</h2>
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
            <div className= {indexStyles.loadMore}>
                <button onClick={onClick1}>
                    {buttonText}
                </button>
            </div>
        </Layout>
    )
}

export default IndexPage