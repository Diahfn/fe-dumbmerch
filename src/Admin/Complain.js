import React, { useState } from 'react'
import Chat from '../Components/Complain/Chat'
import Contact from '../Components/Complain/Contact'
import NavbarAdmin from '../Components/Navbar-Admin'

import beach from '../Assets/beach.png'

export default function AdminComplain() {

    const title = 'Admin Complain'
    document.title = 'DumbMerch | ' + title

    const [contact, setContact] = useState(null)

    const dataContact = [
        {
            id: 1,
            name: 'Ego_lol',
            chat: 'Hello Admin, I need Your Help',
            image: 'https://cdn.albumoftheyear.org/artists/james-arthur_1551737691.jpg'
        },
        {
            id: 2,
            name: 'beach_lover',
            chat: 'Hello Admi, This Problem Product to Me',
            image: {beach}
        }
    ]

    return (
        <div className='bg'>
            <NavbarAdmin title={title} />
            <div className='mx-3 mt-3' style={{height: '84vh'}}>
                <div className='d-flex'>
                    <div style={{height: '84vh'}} className="px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
                    </div>
                    <div style={{maxHeight: '84vh', flex: 1}}>
                        <Chat contact={contact} />
                    </div>
                </div>
            </div>
        </div>
    )
}
