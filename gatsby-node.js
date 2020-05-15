const path = require('path')
// to effectively use Gatsby, you need to know onCreateNode and createPages functions thoroughly

module.exports.createPages = async ({ graphql, actions }) => {
    const {createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    //look into async await (a way to make a promise api look little less asyncronous)
    const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}