import React from 'react';
import { Link } from 'react-router-dom';
import convertRupiah from 'rupiah-format';

export default function ProductCard ({ item, index }) {
    return (
       <div className='card mx-2 my-4' style={{backgroundColor: '#181818', width: 'auto'}}>
            <Link
                to={`/product/` + item.id}
                style={{ textDecoration: 'none' }}
                key={index}
            >
                <div>
                    <img src={item.image} className='rounded' style={{width: '197px', height: '240px'}}/>
                    <div className='mx-2 my-2'>
                        <div style={{color: '#F74D4D'}} className='text-break fw-bold'>{item.name}</div>
                        <div className='price mt-2'>
                            {convertRupiah.convert(item.price)}
                        </div>
                        <div className='price'>Stock : {item.stock}</div>
                    </div>
                </div>
            </Link>
       </div>
    )
}