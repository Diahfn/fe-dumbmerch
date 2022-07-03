import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../Styles.css'

export default function DeleteModal({ show, handleClose, setConfirmDelete }) {

    const handleDelete = () => {
        setConfirmDelete(true)
    }

    return (
        <Modal
            show={show} onHide={handleClose} centered
        >
            <Modal.Body>
                <div style={{fontSize: '23px', fontWeight: 700}}>Delete Data</div>
                <div className='my-2' style={{ fontWeight: 500}}>
                    Are you sure you want to delete this data?
                </div>
                <div className='text-end mt-4'>
                    <Button size='sm' onClick={handleDelete} className='button mx-2' style={{background: '#56C05A'}}  >Yes</Button>
                    <Button size='sm' onClick={handleClose} className='button mx-2' style={{background: '#F74D4D'}} >No</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}
