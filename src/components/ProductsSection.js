import React, { Component } from 'react'
import ProductCard from './ProductCard'
import './ProductsSection.css'
 class ProductsSection extends Component {
       
    static defaultProps = {
        products:[]
    }

    render() {

        const {products}=this.props

        return (
            <div className='ProductSection'>
                
                {!!products.length && (
                    <div className = "ProductSection--Grid">
                       {products.map( (product) => (
                          <ProductCard
                             key={product.slug}
                             slug={product.slug}
                             {...product}
                          />
                       ))}
                    </div>
                 )}
            </div>
        )
    }
}

export default ProductsSection
