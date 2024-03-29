import React, { useState } from 'react'
import '../Styles.css'

export default function Login() {

    const title = 'Login'
    document.title = 'DumbMerch | ' + title

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const { email, password } = form

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='modal_form'>
            <h3 className=' mb-4 fw-bold'>Login</h3>
            <form>
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
                            Login 
                    </button>
                </div>
            </form>
        </div>
    )
}
