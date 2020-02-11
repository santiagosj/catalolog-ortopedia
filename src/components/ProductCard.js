import React from 'react'
import { Link } from 'gatsby'
import './ProductCard.css'
import Image from './Image'
//card del producto--
/**
 * 
 * @param {
 *   slug
 *   image
 *   excerpt
 *   categories
 *   model
 *   className
 * } 
 * 
 * --------------------------
 * |                        |  
 * |  * image               |
 * |  * categories          |
 * |  * exerpt              | 
 * |  * model               |
 * |                        |
 * --------------------------                        
 *                       
 */

const ProductCard = ({
    slug,
    previewImg,
    model,
    excerpt,
    category,
    className = "",
    ...props
}) => (
  <Link to={`/${slug}/`} className={`ProductCard ${className}`}>
      {previewImg && (
        <div className="ProductCard--Image relative">
            <Image imgSrc={previewImg} alt={model}/>
        </div>
      )}
      <div className="ProductCard--Content">
         {model && <h3 className="ProductCard--Model">{model}</h3> }
         <div className="ProductCard--Category">
            {category}
         </div>
         {excerpt && <div className="ProductCard--Excerpt">{excerpt}</div>}
      </div>
  </Link>
)

export default ProductCard

