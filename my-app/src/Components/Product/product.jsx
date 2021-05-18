import React, { useState } from 'react';
import style from './product.module.css';
import { Link } from "react-router-dom";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'double black 5px',
        width: '400px',
        height: '100px',
        borderRadius: '25px',
        backgroundColor: 'rgb(237, 238, 248)'
    }
};

Modal.setAppElement('#root');

const Product = (props) => {
    const { info, deleteProduct, switchCurrProduct } = props;
    const [modalIsOpen, setIsOpen] = useState(false);

    const deleteClick = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const deleteCallback = () => {
        deleteProduct(info.id);
        closeModal()
    }
    const showDetails = () => {
        switchCurrProduct(info)
    }
    return (
        <div className={style.product}>
            <img id={style.image} src={info.imageUrl} alt="" />
            <h4>{info.name}</h4>
            <p>{info.description}</p>
            <div className={style.options}>
                <span>{info.count} items left</span>
                <Link
                    className={style.link}
                    onClick={showDetails}
                    to="/details">
                    More details
                </Link>
                <span
                    className={style.delete}
                    onClick={deleteClick}>
                    Delete
                </span>

            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}>
                <div className={style.modal}>
                    <p>Are you sure you want to delete this product?</p>
                    <div className={style.buttons}>
                        <button id={style.first} onClick={deleteCallback}>Delete</button>
                        <button id={style.second} onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Product;