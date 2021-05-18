import React, { useState } from 'react';
import Product from '../Product/product';
import style from './products.module.css';
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

const Products = (props) => {
    const { products, addProduct, switchCurrProduct } = props;

    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [weight, setWeight] = useState('');
    const [color, setColor] = useState('');
    const [sortName, setSortName] = useState(false);
    const [sortCount, setSortCount] = useState(false);



    const showProducts = () => {
        let sorted = products;
        if (sortName) {
            sorted = products.sort((a, b) => {
                if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                    return -1
                }
                if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                    return 1
                }
                return 0;
            })
        } else if (sortCount) {
            sorted = products.sort((a, b) => {
                return a.count - b.count;
            })
        }
        const res = sorted.map((curr) => {
            return <Product key={curr.id}
                info={curr}
                deleteProduct={props.deleteProduct}
                switchCurrProduct={switchCurrProduct} />
        })
        return res;

    }
    const addClick = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const changeName = e => setName(e.target.value);

    const changeImageUrl = e => setImageUrl(e.target.value);

    const changeColor = e => setColor(e.target.value);

    const changeWeight = e => setWeight(e.target.value);

    const changeDescription = e => setDescription(e.target.value);

    const changeCount = e => setCount(e.target.value);

    const addNew = () => {
        if (name.length > 0 && name.length < 30 &&
            description.length > 0 && description.length < 45 &&
            !isNaN(parseFloat(count)) && isFinite(count) &&      //validation for inputs
            imageUrl.length > 0 &&
            weight.length > 0 &&
            color.length > 0) {
            addProduct(
                {
                    imageUrl,
                    name,
                    count,
                    color,
                    weight,
                    description
                }
            )
            closeModal();
            setName('');
            setImageUrl('');
            setColor('');
            setWeight('');
            setCount('');
            setDescription('');
        } else {
            alert('Incorrect data! Try again, plaese')
        }
    }

    const sortByName = () => {
        setSortName(true);
        setSortCount(false)
    }
    const sortByCount = () => {
        setSortCount(true);
        setSortName(false)
    }
    return (
        <div className={style.container}>
            <h3>Products</h3>
            <div className={style.options}>
                <button id={style.newProduct} onClick={addClick}>Add new product</button>
                <button id={style.sortByName} onClick={sortByName}>Sort by name</button>
                <button id={style.sortByCount} onClick={sortByCount} >Sort by count</button>
            </div>
            <div className={style.productsList}>
                {showProducts()}
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
                        <button id={style.add} onClick={addNew}>Add</button>
                        <button id={style.cancel} onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Products;