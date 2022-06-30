import React, { useState } from 'react'
import NavBar from '../Components/NavBar'

export default function UserComplain() {

    const title = 'Complain'
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
            <div style={{height: '100vh'}}>
                <div>
                    <div style={{height: '100vh'}}></div>
                    <div style={{maxHeight: '90vh'}}></div>
                </div>
            </div>
        </div>
    )
}
