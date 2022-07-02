import React, { useState } from 'react'
import NavbarAdmin from '../Components/Navbar-Admin'
import { useNavigate, useParams } from 'react-router-dom'
import { dataCategory } from '../Dummy/Category'

export default function AddCategory() {

    const title = 'Category'
    document.title = 'DumbMerch | ' + title

    let { id } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState(dataCategory.find(item => item.id == id))

    const handleChange = (e) => {
        setCategory({
            name: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/category')
    }

    return (
        <div className='bg'>
            <NavbarAdmin title={title} />
            <div>
                <div className='mt-4 mx-5'>
                    <h3 style={{marginLeft: '70px', marginTop: '50px'}}>Add Category</h3>
                    <div className='mx-5'>
                        <form className='d-flex flex-column form mt-5' onSubmit={handleSubmit}>
                            <input className='input-category' placeholder='Category' name='category' onChange={handleChange} value={category} autoComplete='off' />
                            <button className='btn-category' type='submit'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
