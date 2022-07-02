import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteModal from '../Components/Modal/Delete-Modal'
import NavbarAdmin from '../Components/Navbar-Admin'
import {dataCategory} from '../Dummy/Category'

export default function Category() {

    const title = 'Category'
    document.title = 'DumbMerch | ' + title

    const [category, setCategory] = useState(dataCategory)
    const [idDelete, setIdDelete] = useState(null)
    const [confirmDelete, setConfirmDelete] = useState(null)

    const navigate = useNavigate()

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleEdit = (id) => {
        navigate(`/edit-category/${id}`)
    }

    const handleDelete = (id) => {
        setIdDelete(id)
        handleShow()
    }

    useEffect(() => {
        if (confirmDelete) {
            handleClose()

            setCategory(category.filter(item => item.id != idDelete))
            setConfirmDelete(null)
        }
    }, [confirmDelete])

    const addCategory = () => {
        navigate('/add-category')
    }

  return (
    <div className='bg'>
        <NavbarAdmin title={title} />
        <div className='d-flex justify-content-center mx-5'>
            <div className='mx-5'>
                <div className='d-flex justify-content-between mb-3 mt-5'>
                    <h3 className='fw-bold'>List Category</h3>
                    <button onClick={addCategory} style={{background: '#56C05A'}} className='button'>
                        Add
                    </button>
                </div>
                <div className='d-flex justify-content-center'>
                    {category?.length != 0 ? (
                        <table  className='table mytable my-3 table-dark table-striped' style={{color: 'white'
                        }}>
                            <thead>
                                <tr style={{fontSize: '17px'}}>
                                    <th>No</th>
                                    <th >Category Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {category?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td >
                                            <button 
                                                className='button mx-2' onClick={()=>{handleEdit(item.id)}}
                                                style={{background: '#56C05A'}}
                                            >Edit</button>
                                            <button 
                                                onClick={() => handleDelete(item.id)} 
                                                className='button mx-2'
                                                style={{background: '#F74D4D'}}
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div>
                            <div className='mt-3'>No Data category</div>
                        </div>
                    )}
                </div>
            </div>
            <DeleteModal
                setConfirmDelete={setConfirmDelete}
                show={show}
                handleClose={handleClose}
            />
        </div>
    </div>
  )
}
