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
                raw
            }
        }
    }
`

const Image = (props) => {
    const bodyRaw = props.data.contentfulBlogPost?.body?.raw
    const bodyDocument = bodyRaw ? JSON.parse(bodyRaw) : null

    return(
        <Layout>
            <div>
                {bodyDocument ? documentToReactComponents(bodyDocument) : null}
            </div>
        </Layout>
    )
}

export default Image
