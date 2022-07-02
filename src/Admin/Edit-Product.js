import React, { useState } from 'react'
import NavbarAdmin from '../Components/Navbar-Admin'
import { useNavigate } from 'react-router-dom'
import { dataCategory } from '../Dummy/Category'

export default function EditProduct() {

    const title = 'Product'
    document.title = 'DumbMerch | ' + title

    const navigate = useNavigate()

    const [preview, setPreview] = useState(null)
    const [category, setCategory] = useState(dataCategory)
    const [form, setForm] = useState({
        image: '',
        name: '',
        desc: '',
        price: '',
        qty: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/product')
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:
            e.target.type === 'file' ? e.target.files : e.target.value
        })

        if (e.target.type === 'file') {
            let url = URL.createObjectURL(e.target.files[0])
            setPreview(url)
        }
    }

    return (
        <div className='bg'>
            <NavbarAdmin />
            <div className='mx-5'>
                <div className='mx-5 mt-4'>
                    <h3 className='mt-3'>Edit Product</h3>
                    <div className='mt-4'>
                        <form onSubmit={handleSubmit} className='d-flex flex-column mt-4'>
                            {preview && (
                                <div>
                                    <img
                                        src={preview}
                                        style={{
                                            maxWidth: '150px',
                                            maxHeight: '150px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                            <input
                                type='file'
                                id='upload'
                                name='image'
                                hidden
                                onChange={handleChange}
                            />
                            <label for='upload' className='mt-2 mb-3 label-file upload-file'>
                                Upload file
                            </label>
                            <input
                                type='text'
                                placeholder='Product Name'
                                name='name'
                                className='add-product'
                                onChange={handleChange}
                                autoComplete='off'
                            />
                            <textarea 
                                placeholder='Product Desc'
                                name='desc'
                                onChange={handleChange}
                                className='add-product'
                                style={{height: '130px', resize: 'none'}}
                            />
                            <input
                                type='number'
                                placeholder='Price (Rp.)'
                                name='price'
                                className='add-product'
                                onChange={handleChange}
                                autoComplete='off'
                            />
                            <input
                                type='number'
                                placeholder='Stock'
                                name='stock'
                                className='add-product'
                                onChange={handleChange}
                                autoComplete='off'
                            />
                            <div className='card-category mt-2 px-3 py-1 pb-2'>
                                <div className='mb-1' style={{fontSize: '15px'}}>
                                    Category
                                </div>
                                {category?.map((item, index) => (
                                    <div key={index} className='form-check form-check-inline'>
                                        <label className='me-4 form-check-label text-white'>
                                        <input
                                            type='checkbox'
                                            value={item.id}
                                            className='form-check-input'
                                        />
                                        {item.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className='mt-4 mb-5'>
                                <button type='submit' className='button' style={{fontSize: '17px', background: '#56C05A', width: '100%'}}>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
