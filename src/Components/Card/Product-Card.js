import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css'

export default function ProductCard ({ item, index }) {
    return (
       <div className='card mx-2 my-3' style={{backgroundColor: '#181818', width: 'auto'}}>
            <Link
                to={`/product/` + item.id}
                style={{ textDecoration: 'none' }}
                key={index}
            >
                <div>
                    <img src={item.image} className='product_image'/>
                    <div className='mx-2 my-2'>
                        <div style={{color: '#F74D4D'}} className='text-break fw-bold'>{item.name}</div>
                        <div className='price mt-2'>
                            {item.price}
                        </div>
                        <div className='price'>Stock : {item.stock}</div>
                    </div>
                </div>
            </Link>
       </div>
    )
}