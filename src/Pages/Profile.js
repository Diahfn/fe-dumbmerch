import React, { useContext } from 'react'
import NavBar from '../Components/NavBar'
import { dataTransaction } from '../Dummy/Transaction'
import convertRupiah from 'rupiah-format'
import dateFormat from 'dateformat'

import icon from '../Assets/Frame.png'

export default function Profile() {

  const title = 'Profile'
  document.title = 'DumbMerch | ' + title

  const img = 'https://cdn.albumoftheyear.org/artists/james-arthur_1551737691.jpg'

  return (
    <div className='bg'>
      <NavBar title={title} />
      <div className='mx-5 d-flex justify-content-between'>
        <div className='mx-5 mt-4'>
          <h3 style={{color: '#F74D4D', fontWeight: '700'}}>My Profile</h3>
          <div className='mt-4 d-flex'>
            <img src={img} className='rounded' style={{width: '275px'}} />
            <div className='mx-4'>
              <div>
                <p className='text_profile'>Name</p>
                <p>Diah</p>
              </div>
              <div>
                <p className='text_profile'>Email</p>
                <p>diah@gmail.com</p>
              </div>
              <div>
                <p className='text_profile'>Phone</p>
                <p>081234567890</p>
              </div>
              <div>
                <p className='text_profile'>Gender</p>
                <p>Female</p>
              </div>
              <div>
                <p className='text_profile'>Address</p>
                <p style={{width: '300px'}}>Jln Sesame Street</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4 d-flex flex-column'>
          <h3 style={{color: '#F74D4D'}}>My Transaction</h3>
          
          <div className='d-flex flex-column'>
            {dataTransaction.map((item, index) => (
              <div key={index} className='d-flex transaction-card mt-4'>
                        <div className='mx-3'>
                            <img src={item.img} alt='' className='img-transaction' />
                        </div>
                        <div>
                            <h6 className='red fw-bold mb-2'>{item.name}</h6>
                            <div>
                                <p className='red_font' style={{fontSize: '13px', fontWeight: 300}}>{dateFormat(item.date, 'dddd, d mmmm yyyy')}</p>
                                <p style={{fontSize: '13px'}}>Price : {convertRupiah.convert(item.price)}</p>
                            </div>
                            <div>
                                <p className='fw-bold mb-0 mt-3' style={{fontSize: '13px'}}>Sub Total : {convertRupiah.convert(item.subtotal)}</p>
                            </div>
                        </div>
                        <div className='align-self-center ms-auto mx-3'>
                            <img src={icon} alt='icon' style={{width: '65px'}}/>
                        </div>
                        
                    </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
