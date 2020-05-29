import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import topPostStyles from './topPost.module.scss'

const TopPost = () => {
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
                    resize (width: 580, height: 560) {
                      src
                    }
                  }
              }
            }
          }
    }
    `)
    return(
        <div className={topPostStyles.main}>
            <ol className={topPostStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return(edge.node.page === 'top post' ? 
                        <li className={topPostStyles.post}>
                            <div className={topPostStyles.boxstyle}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <div className={topPostStyles.image}>
                                        <img
                                        src={edge.node.image.resize.src}
                                        alt={edge.node.image.title}
                                        />
                                    </div>
                                </Link>
                                    <div className={topPostStyles.text}>
                                        <p className={topPostStyles.pageTitle}>{edge.node.page}</p>
                                        <Link to={`/blog/${edge.node.slug}`}>
                                            <h2>{edge.node.title}</h2>
                                        </Link>
                                        <p className={topPostStyles.summ}>{edge.node.summary}</p>
                                        <p className={topPostStyles.date}>{edge.node.publishedDate}</p>
                                    </div>
                                </div>
                            <br/>
                        </li> : ("")
                    )
                })}
            </ol>
        </div>
    )
}

export default TopPost