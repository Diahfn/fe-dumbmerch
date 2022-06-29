import React, { useState } from 'react'
import ProductCard from '../Components/Card/Product-Card'
import NavBar from '../Components/NavBar'
import { dataProduct } from '../Dummy/DataProduct'
import './Styles.css'

export default function Homepage() {

    const title = 'Product'
    document.title = 'DumbMerch | ' + title

    const [product, setProduct] = useState(dataProduct)

  return (
    <div className='bg'>
        <NavBar title={title} />
        <div className='mx-5 px-5 mt-4 pb-5'>
            <h3 style={{color: '#F74D4D', fontWeight: '700'}}>Product</h3>
            <div className='product_main'>
                {product?.length != 0 ? (
                    <div className='d-flex flex-wrap justify-content-around'>
                        {product?.map((item, index) => (
                            <ProductCard key={index} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center pt-5">
                        <div className="mt-3">No data product</div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
