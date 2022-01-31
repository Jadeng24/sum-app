import React from 'react'
import Modal from 'react-modal'
import LoginModalContent from './Login-Modal-Content/Login-Modal-Content'

import './Login-Modal.scss'

interface LoginModalProps {
    modalIsOpen: any
    afterOpenModal: any
    closeModal: any
}
const styles = {
    content: {
        width: '70vw',
        height: '70vh',
        margin: 'auto',
        borderRadius: '14px',
    },
    modalContent: {
        padding: '40px',
    },
    googleBtn: {
        width: '200px',
        cursor: 'pointer',
    },
    // fullscreen: {
    // 	// make modal fullscreen
    // 	content: {
    // 		top: '50%',
    // 		left: '50%',
    // 		right: 'auto',
    // 		bottom: 'auto',
    // 		marginRight: '-50%',
    // 		transform: 'translate(-50%, -50%)',
    // 	},
    // },
}

const LoginModal = (props: LoginModalProps) => {
    const { modalIsOpen, afterOpenModal, closeModal } = props

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={styles}
            >
                <LoginModalContent closeModal={closeModal} />
            </Modal>
        </div>
    )
}

export default LoginModal
