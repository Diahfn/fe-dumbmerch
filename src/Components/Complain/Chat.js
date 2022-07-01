import React from 'react'
import '../Styles.css'

import chat from '../../Assets/chat.png'
import adminChat from '../../Assets/admin-chat.png'

export default function Chat({ contact }) {

    return (
        <>
            {contact ? 
                <>
                    <div className='overflow-auto d-flex align-items-end px-3 py-2' style={{height: '73vh'}}>
                        <div className='d-flex flex-column' style={{width: '100%'}}>
                            <div className='ms-auto py-1'>
                                <img src={chat} alt='' />
                            </div>
                            
                            <div>
                                <img src={adminChat} alt='' className='me-2 ' />
                            </div>
                        </div>
                    </div>
                    <div style={{height: '5vh'}} className='px-3'>
                        <input placeholder='Send Message' className='input-message px-3 my-3' />
                    </div>
                </>
                :
                <div className='text-message'>
                    <h3>No Message</h3>
                </div>
            }
        </>
    )
}
