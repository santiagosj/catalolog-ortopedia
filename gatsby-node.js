const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions
  
  const products = await graphql(`
     {
      allProducts {
        edges {
          node {
            id
            slug
            model
            description
            category
            productImgs{
              src
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;

    const productNodes = result.data.allProducts.edges;
    
    return productNodes.map( edge =>{
      return {
        ...edge.node
      }
    })
  })
  
  const productsPerPage = 10
  const numPages = Math.ceil(products.length / productsPerPage);
 
  Array.from({length:numPages}).forEach((_, i)=>{
    createPage({
      path: i === 0 ? '/products' : `/products/${i + 1}`,
      component: path.resolve('./src/templates/ProductsSectionTemplate.js'),
      context: {
        products,
        limit:productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
      }
    });
  })
  
  products.forEach( product => {
    createPage({
      path: `/${product.slug}`,
      component: path.resolve('./src/templates/singleProduct.js'),
      context: {
        product
      }
    });
  });
}
