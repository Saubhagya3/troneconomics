import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Title = ({pageTitle}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    return (
        <div>
            {`${data.site.siteMetadata.title} | ${pageTitle}`}
        </div>
    )
}

export default Title