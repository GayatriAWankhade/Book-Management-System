import React, { useState } from 'react';
import './AddBook.css';

function AddBook(props) {

    const [enteredId, setEnteredId] = useState("");
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [enteredPrice, setEnteredPrice] = useState("");

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }

    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let book = {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
        }

        props.handleSubmit(book);

        setEnteredId("");
        setEnteredTitle("");
        setEnteredAuthor("");
        setEnteredPrice("");
    }

    return (
        <div className="form-container">
            <form className='form-div' onSubmit={handleSubmit}>
                <span id='inner-container'>
                    <span id='label-id' className='input-labels'>id:</span>
                    <input type="text" id="id" className='input-field' onChange={handleChangeId} value={enteredId}></input>
                    <span id='label-title' className='input-labels'>Title:</span>
                    <input type="text" id="title" className='input-field' onChange={handleChangeTitle} value={enteredTitle}></input>
                    <span id='label-author' className='input-labels'>Author:</span>
                    <input type="text" id="author" className='input-field' onChange={handleChangeAuthor} value={enteredAuthor}></input>
                    <span id='label-price' className='input-labels'>Price:</span>
                    <input type="text" id="price" className='input-field' onChange={handleChangePrice} value={enteredPrice}></input>
                    <input type="submit" value="add" id="add-btn" />
                </span>
            </form>
        </div>
    );
}

export default AddBook;