import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Card/Product-Card'
import NavBar from '../Components/NavBar'
import { dataProduct } from '../Dummy/Product'

export default function Homepage({ searchItem, filterProduct }) {

    const title = 'Product'
    document.title = 'DumbMerch | ' + title

    const [product, setProduct] = useState(dataProduct)
    
  return (
    <div className='bg'>
        <NavBar title={title} product={product} filterProduct={filterProduct} />
        <div className='mx-5 px-5 mt-5 pb-5'>
            <h3 style={{color: '#F74D4D', fontWeight: '700'}}>Product</h3>
            <div className='product_main'>
                {!filterProduct ? (
                    <div className='d-flex flex-wrap justify-content-around'>
                        {product?.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className='d-flex flex-wrap justify-content-around'>
                    {filterProduct.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
                    </div>
                )}
                
            </div>
        </div>
    </div>
  )
}
