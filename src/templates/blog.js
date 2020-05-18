import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

//there is no way to access slug through regular useStaticQuery so we need to 
//export the query and use props to get it
export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq:$slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body { 
                json 
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt= node.data.target.fields.title['en-US']
                const url=node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }
    return(
        <Layout>
            <div className={blogStyles.postLayout}>
                <Head title={props.data.contentfulBlogPost.title}/>
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <p className={blogStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
                {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
            </div>
        </Layout>
    )
}

export default Blog