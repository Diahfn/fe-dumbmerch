import React from 'react'

export default function Chat({ contact }) {

    const img = 'https://cdn.albumoftheyear.org/artists/james-arthur_1551737691.jpg'

    return (
        <>
            {contact ? 
                <>
                    <div className='overflow-auto px-3 py-2' style={{height: '80vh'}}>
                        <div className='d-flex justify-content-end py-1'>
                            <div className='text-chat'>
                                Hello Admin, I Need Your Help
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt perspiciatis accusamus?
                            </div>
                        </div>
                        <div className='d-flex justify-content-start py-1'>
                            <img src={img} className='rounded-circle me-2 chat_img' />
                            <div className='chat-other'>
                                Yes, Is there anyting I can help ?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa nemo earum.
                            </div>
                        </div>
                    </div>
                    <div style={{height: '5vh'}} className='px-3'>
                        <input placeholder='Send Message' className='input-message px-2' />
                    </div>
                </>
                :
                <div style={{height: '90vh'}} className='h4 d-flex justify-content-center align-items-center'>
                    No Message
                </div>
            }
        </>
    )
}
