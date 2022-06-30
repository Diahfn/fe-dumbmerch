import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import { useParams } from  'react-router-dom'
import { dataProduct } from '../Dummy/Product'
import convertRupiah from 'rupiah-format'

export default function DetailPage() {

    let { id } = useParams()

    const title = 'Product'
    document.title = 'DumbMerch | ' + title

    const [product, setProduct] = useState({})

    useEffect(() => {
        let data = dataProduct.find((item) => item.id == id)
        setProduct(data)
    }, [id])
    

  return (
    <div className='bg'>
        <NavBar title={title} />
        <div className='d-flex justify-content-center'>
            <div className='my-5 d-flex'>
                <div className='mx-5'>
                    <img src={product?.image} className='image_product' />
                </div>
                <div className='my-2' style={{width: '350px'}}>
                    <h2 className='red_font fw-bold'>{product?.name}</h2>
                    <div className='d-flex flex-column mt-4' style={{fontSize: '14px'}}>
                        <div className='mt-1'>
                            <p>Stock : {product?.stock}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='text-break' style={{textAlign: 'justify'}}>{product?.desc}</p>
                        </div>
                        <div className='red_font ms-auto'>
                            <h5 style={{fontWeight: '700'}}>{convertRupiah.convert(product?.price)}</h5>
                        </div>
                        <div className='d-grid mt-3'>
                            <button
                                style={{backgroundColor: '#F74D4D', color: 'white', fontSize: '16px'}} className='btn fw-bold'>
                                Buy
                            </button>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
  )
}
