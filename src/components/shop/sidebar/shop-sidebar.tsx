import React from 'react'
import PriceFilter from './price-filter'
import ProductStatus from './product-status'
import CategoryFilter from './category-filter'
import ColorsFilter from './colors-filter'
import ShopBrands from './shop-brands'
import ProductSizes from './product-sizes'

export default function ShopSidebar() {
  return (
     <div className="tp-shop-sidebar mr-10">
        
        {/* price filter */}
        <PriceFilter/>
        {/* price filter */}

        {/* product status */}
        <ProductStatus/>
        {/* product status */}
      
        {/* category filter */}
        <CategoryFilter/>
        {/* category filter */}
    
        {/* color filter */}
        <ColorsFilter/>
        {/* color filter */}
        
        {/* brands */}
        <ShopBrands/>
        {/* brands */}

        {/* size */}
        <ProductSizes/>
        {/* size */}
    </div>
  )
}
