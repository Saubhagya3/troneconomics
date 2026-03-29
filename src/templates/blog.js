import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import * as blogStylesModule from './blog.module.scss'

//there is no way to access slug through regular useStaticQuery so we need to 
//export the query and use props to get it
export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body { 
                raw
            }
        }
    }
`

const Blog = (props) => {
    const blogStyles = blogStylesModule.default || blogStylesModule
    const bodyRaw = props.data.contentfulBlogPost?.body?.raw
    const bodyDocument = bodyRaw ? JSON.parse(bodyRaw) : null

    return(
        <Layout>
            <div className={blogStyles.postLayout}>
                <Head title={props.data.contentfulBlogPost.title}/>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <p className={blogStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
                {bodyDocument ? documentToReactComponents(bodyDocument) : null}
            </div>
        </Layout>
    )
}

export default Blog
