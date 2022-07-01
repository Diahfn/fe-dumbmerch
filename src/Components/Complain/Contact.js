import React from 'react'
import '../Styles.css'

import admin from '../../Assets/admin.png'

export default function Contact({ dataContact, setContact, contact }) {

    const clickContact = (id) => {
        const data = dataContact.find(item => item.id == id)
        setContact(data)
        console.log(data)
    }

    return (
        <>
            {dataContact.map((item, index) => (
                <div key={index}
                    className={`contact mt-3 px-2 ${contact?.id == item?.id} $$ contact-active`} 
                    onClick={() => clickContact(item.id)}
                >
                    <img src={admin} className='me-2 img_contact' />
                    <div className='pt-2'>
                        <ul className='ps-0 text-contact'>
                            <li>{item.name}</li>
                            <li className='text-contact-chat mt-1'>
                                {item.chat}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}
