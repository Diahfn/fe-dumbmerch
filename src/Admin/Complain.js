import React, { useState } from 'react'
import Chat from '../Components/Complain/Chat'
import Contact from '../Components/Complain/Contact'
import NavBar from '../Components/NavBar'

export default function AdminComplain() {

    const title = 'Admin Complain'
    document.title = 'DumbMerch | ' + title

    const [contact, setContact] = useState(null)

    const dataContact = [
        {
            id: 1,
            name: 'Admin',
            chat: 'Yes, Is there anything I can help',
            image: 'https://cdn.albumoftheyear.org/artists/james-arthur_1551737691.jpg'
        },
        {
            id: 2,
            name: 'Admin 2',
            chat: 'Hello World',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MNRCVQWgg52OEWyWsuKTmPdyjjSsb84_xQ&usqp=CAU'
        }
    ]

    return (
        <div className='bg'>
            <NavBar title={title} />
            <div className='mx-3 mt-3' style={{height: '84vh'}}>
                <div className='d-flex'>
                    <div style={{height: '84vh'}} className="px-3 border-end border-dark overflow-auto">
                        <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
                    </div>
                    <div style={{maxHeight: '84vh'}}>
                        <Chat contact={contact} />
                    </div>
                </div>
            </div>
        </div>
    )
}
