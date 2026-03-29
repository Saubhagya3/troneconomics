import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import * as indexStylesModule from './index.module.scss'
import Head from '../components/head'
import TopPost from '../components/topPost'
import BreakingPost from '../components/breakingPost'

const IndexPage = () => {
    const indexStyles = indexStylesModule.default || indexStylesModule
    const styles = indexStyles || {}
    const [ middle, setMiddle ] = useState(styles.middle || '')
    const [ left, setLeft ] = useState(styles.left || '')
    const [ buttonText, setButtonText ] = useState('Show More')
    const [ clicked, setClicked ] = useState(false)

    const onClick1 = () => {
        setClicked(!clicked)
        clicked ? setButtonText('Show More') : setButtonText('Show Less')
        clicked ? setMiddle(styles.middle || '') : setMiddle(styles.middle2 || '')
        clicked ? setLeft(styles.left || '') : setLeft(styles.left2 || '')
    }
    
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort: { publishedDate: DESC })
        {
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
            <div className={styles.table || ''}>
                <div className={middle}>
                    <ol className={styles.posts || ''}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === 'general left' ||
                                edge.node.page === 'economy' ?
                                <li className={styles.post || ''}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div className={styles.image || ''}>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            />
                                        </div>
                                    </Link>
                                    <p className={styles.pageTitle || ''}>{edge.node.page}</p>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                    </Link>
                                    <p>{edge.node.summary?.summary}</p>
                                    <p className={styles.date || ''}>{edge.node.publishedDate}</p>
                                    
                                    <br/>
                                </li> : ("")
                            )
                        })}
                    </ol>
                </div>
                <div className={left}>
                    <ol className={styles.posts || ''}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(edge.node.page === "general right" ||
                            edge.node.page === "tech" ||
                            edge.node.page === "equity" ?
                                <li className={styles.post || ''}>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <div className= {styles.leftImg || ''}>
                                            <img
                                            src={edge.node.image.resize.src}
                                            alt={edge.node.image.title}
                                            style={{width:'100%'}}
                                            />
                                        </div>
                                    </Link>
                                    <p className={styles.pageTitle || ''}>{edge.node.page}</p>
                                    <Link to={`/blog/${edge.node.slug}`}>
                                        <h2>{edge.node.title}</h2>
                                    </Link>
                                    <p>{edge.node.summary?.summary}</p>
                                    <p className={styles.date || ''}>{edge.node.publishedDate}</p>
                                    <br/>
                                </li> : ("")
                            )
                        })}
                    </ol>
                </div>
                <div className={styles.right || ''}>
                    <ol className={styles.posts || ''}>
                        {data.allContentfulBlogPost.edges.map(edge => {
                            return(
                                <li className={styles.post || ''}>
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
            <div className= {styles.loadMore || ''}>
                <button onClick={onClick1}>
                    {buttonText}
                </button>
            </div>
        </Layout>
    )
}

export default IndexPage
