import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

const Image = (props) => {
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
            <div>
                {documentToReactComponents(options)}
            </div>
        </Layout>
    )
}

export default Image