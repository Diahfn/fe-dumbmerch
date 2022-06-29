import React, { useState } from 'react'
import '../Styles.css'

export default function Register() {

    const title = 'Register'
    document.title = 'DumbMerch | ' + title

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { email, password, name } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='modal_form'>
            <h3 className=' mb-4 fw-bold'>Register</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group mb-3'>
                    <input
                        className='form-control' 
                        type='text' 
                        name='name' 
                        placeholder='Fullname'
                        style={{backgroundColor: '#555555', border: '2px solid #BCBCBC', color: 'white'}}
                        onChange={handleChange}
                        value={name}
                        autoComplete='off'                                        
                    />
                </div>
                <div className='form-group mb-3'>
                    <input
                        className='form-control' 
                        type='email' 
                        name='email' 
                        placeholder='Email'
                        style={{backgroundColor: '#555555', border: '2px solid #BCBCBC', color: 'white'}}
                        onChange={handleChange}
                        value={email}
                        autoComplete='off'                                        
                    />
                </div>
                <div className='form-group mb-4'>
                    <input
                        className='form-control' 
                        type='password' 
                        name='password' 
                        placeholder='Password'
                        style={{backgroundColor: '#555555', border: '2px solid #BCBCBC', color: 'white'}}
                        onChange={handleChange}
                        value={password}
                        autoComplete='off'                                        
                    />
                </div>
                <div className='d-grid'>
                    <button type='submit'
                        style={{backgroundColor: '#F74D4D', color:'white'}} 
                        className='button mt-3 fw-bold'>
                            Register
                    </button>
                </div>
            </form>
        </div>
    )
}
