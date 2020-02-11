import React from 'react'
import Layout from '../components/layout'

const SingleProduct = ({ pageContext })=> {
    
   const { product } = pageContext
   
   return (
       <Layout>
         <h1>{product.model}</h1>
         <div className='product-container'>
           <div className='product-description'>
             <div>{product.description}</div>
               <p>
                 {product.category}
              </p>
           </div>
           <div className='product-imgs'>
              {product.productImgs.map((srcImg, i)=>(
                <img alt="productImg" src={srcImg.src} key={i}/>
              ))}
           </div>
         </div>
       </Layout>
   )
}

export default SingleProduct;