import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import breakingPostStyles from './breakingPost.module.scss'

const BreakingPost = () => {
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
                    resize (width: 300, height: 250) {
                      src
                    }
                  }
              }
            }
          }
    }
    `)
    return(
        <div className={breakingPostStyles.main}>
        <ol className={breakingPostStyles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return(edge.node.page === 'breaking' ? 
                        <li className={breakingPostStyles.post}>
                          <div className={breakingPostStyles.boxstyle}>
                              <Link to={`/blog/${edge.node.slug}`}>
                                <img
                                src={edge.node.image.resize.src}
                                alt={edge.node.image.title}
                                />
                              </Link>
                              <p className={breakingPostStyles.pageTitle}>{edge.node.page}</p>
                              <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                              </Link>
                              <p className={breakingPostStyles.summ}>{edge.node.summary}</p>
                              <p className={breakingPostStyles.date}>{edge.node.publishedDate}</p>
                                
                            </div>
                            <br/>
                        </li> : ("")
                    )
                })}
            </ol>
        </div>
    )
}

export default BreakingPost