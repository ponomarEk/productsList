import React, { useState } from 'react';
import style from './productDetails.module.css';
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
        height: '500px',
        borderRadius: '25px',
        backgroundColor: 'rgb(237, 238, 248)'
    }
};

const ProductDetails = (props) => {
    const { currProduct, editProduct } = props;

    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(currProduct.name);
    const [description, setDescription] = useState(currProduct.description);
    const [count, setCount] = useState(currProduct.count);
    const [imageUrl, setImageUrl] = useState(currProduct.imageUrl);
    const [weight, setWeight] = useState(currProduct.weight);
    const [color, setColor] = useState(currProduct.color);

    const editClick = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const changeName = e => setName(e.target.value);

    const changeImageUrl = e => setImageUrl(e.target.value);

    const changeColor = e => setColor(e.target.value);

    const changeWeight = e => setWeight(e.target.value);

    const changeDescription = e => setDescription(e.target.value);

    const changeCount = e => setCount(e.target.value);

    const saveEdited = () => {
        if (name.length > 0 && name.length < 100 &&
            description.length > 0 && description.length < 150 &&
            !isNaN(parseFloat(count)) && isFinite(count) && +count >= 0 &&    //validation for inputs
            imageUrl.length > 0 &&
            weight.length > 0 &&
            color.length > 0) {
            editProduct(
                {
                    id: currProduct.id,
                    imageUrl,
                    name,
                    count,
                    color,
                    weight,
                    description
                }
            )
            closeModal()
        } else {
            alert('Incorrect data! Try again, plaese')
        }
    }

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={imageUrl} alt="" />
            </div>
            <h3>{name}</h3>
            <div className={style.options}>
                <p>{description}</p>
                <ul>
                    <li>{count} items left</li>
                    <li>Color: {color}</li>
                    <li>Weight: {weight}</li>
                </ul>
                <span className={style.edit} onClick={editClick}>Edit product</span>
                <Link className={style.link} to='/'>Back to product list</Link>
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}>
                <div className={style.modal}>
                    <label>
                        Name:
                        <input className={style.inputField} type="text" onChange={changeName} value={name} />
                    </label>
                    <label>
                        Decription:
                        <input className={style.inputField} type="text" onChange={changeDescription} value={description} />
                    </label>
                    <label>
                        Count:
                        <input className={style.inputField} type="text" onChange={changeCount} value={count} />
                    </label>
                    <label>
                        Color:
                        <input className={style.inputField} type="text" onChange={changeColor} value={color} />
                    </label>
                    <label>
                        Image URL:
                        <input className={style.inputField} type="text" onChange={changeImageUrl} value={imageUrl} />
                    </label>
                    <label>
                        Weight:
                        <input className={style.inputField} type="text" onChange={changeWeight} value={weight} />
                    </label>
                    <div className={style.buttons}>
                        <button id={style.save} onClick={saveEdited}>Save</button>
                        <button id={style.cancel} onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProductDetails;