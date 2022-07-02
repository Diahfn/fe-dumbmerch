import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavbarAdmin from '../Components/Navbar-Admin'
import { dataCategory } from '../Dummy/Category'

export default function EditCategory() {

    const title = 'Category'
    document.title = 'DumbMerch | ' + title

    let { id } = useParams()
    const navigate = useNavigate()
    const [category, setCategory] = useState(dataCategory.find(item => item.id == id))

    const handleChange = (e) => {
        setCategory({
            ...category,
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
            <div className='mt-4 mx-5'>
                <h3 style={{marginLeft: '70px', marginTop: '50px'}}>Edit Category</h3>
                <div className='mx-5'>
                    <form onSubmit={handleSubmit} className='d-flex flex-column mt-5'>
                        <input className='input-category' 
                        placeholder='Category' 
                        onChange={handleChange}
                        value={category.name} />
                        <button className='btn-category' type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
