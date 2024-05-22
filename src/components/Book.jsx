
import { useState } from 'react';
import './Book.css';

function Book(props){

    let[isUpdating, setIsUpdating] = useState(false);

    let[updatedId, setUpdatedId] = useState(props.id);
    let[updatedTitle, setUpdatedTitle] = useState(props.title);
    let[updatedAuthor, setUpdatedAuthor] = useState(props.author);
    let[updatedPrice, setUpdatedPrice] = useState(props.price);



    // isUpdating variable = false
    // now isUpdating is true
    function handleUpdate(){
        let book;

        if(isUpdating == true) {
            book = {
                        id: updatedId,
                        title: updatedTitle,
                        author: updatedAuthor,
                        price: updatedPrice
                    }

                    let newBooks = [...props.books];

                    newBooks.map(
                        (element, idx)=>{
                            if(element.id == book.id) {
                                newBooks.splice(idx, 1, book);
                            }
                        }
                    )
            
                    props.setBooks(newBooks);
                    setIsUpdating(false);
        }   
        else{
            setIsUpdating(true);
        }

       
    }

    function handleIdChange(event) {
        setUpdatedId(event.target.value);
    }

    function handleTitleChange(event){
        setUpdatedTitle(event.target.value);
    }

    function handleAuthorChange(event){
        setUpdatedAuthor(event.target.value);
    }


    function handlePriceChange(event){
        setUpdatedPrice(event.target.value);
    }

    return(
        <div id="book-container">

            {isUpdating ? 
                <input  
                    type="text"
                    id="input-data1"
                    className="input-data"
                    onChange={handleIdChange}
                    value={updatedId}
                    
            />
            :
                <span id="container-data1" className='book-data'>{props.id}</span>
            }


            {
                isUpdating?
                    <input
                        type="text"
                        id="input-data2"
                        className="input-data"
                        onChange={handleTitleChange}
                        value = {updatedTitle}

                    />
                :
                    <span id="container-data2" className='book-data'>{props.title}</span> 

            }

{
                isUpdating?
                    <input
                        type="text"
                        id="input-data3"
                        className="input-data"
                        onChange={handleAuthorChange}
                        value = {updatedAuthor}
                    />
                :
                    <span id="container-data3" className='book-data'>{props.author}</span> 

            }


{
                isUpdating?
                    <input
                        type="text"
                        id="input-data4"
                        className="input-data"
                        onChange={handlePriceChange}
                        value={updatedPrice}
                    />
                :
                    <span id="container-data4" className='book-data'>{props.price}</span> 

            }

          <button id="remove-btn" className='btn' onClick={()=>{props.handleRemove(props.id)}}>Remove</button>
          <button id="update-btn" className='btn' onClick={handleUpdate} > {isUpdating ? "Save" : "Update"} </button>
        </div>
    );
}
export default Book;


/*
<span id="container-data1" className='book-data'>{props.id}</span>
<span id="container-data2" className='book-data'>{props.title}</span>
<span id="container-data3" className='book-data'>{props.author}</span>
<span id="container-data4" className='book-data'>{props.price}</span>
*/



/*onClick={handleUpdate} */
/*
let[idContent, setIdContent] = useState(<span id="container-data1" className='book-data'>{props.id}</span>);
let[titleContent, setTitleContent] = useState(<span id="container-data2" className='book-data'>{props.title}</span>);
let[authorContent, setAuthorContent] = useState(<span id="container-data3" className='book-data'>{props.author}</span>);
let[priceContent, setPriceContent] = useState(<span id="container-data4" className='book-data'>{props.price}</span>);

function handleUpdate(){
    setIdContent(<input type='text' id='input-data1' className='input-data'></input>);
    setTitleContent(<input type='text' id='input-data2' className='input-data'></input>)
    setAuthorContent(<input type='text' id='input-data3' className='input-data'></input>)
    setPriceContent(<input type='text' id='input-data4' className='input-data'></input>)
}
*/



/*
import React, { useState } from 'react';
import './Book.css';

function Book(props) {
    const [isUpdating, setIsUpdating] = useState(false);
    const [updatedId, setUpdatedId] = useState(props.id);
    const [updatedTitle, setUpdatedTitle] = useState(props.title);
    const [updatedAuthor, setUpdatedAuthor] = useState(props.author);
    const [updatedPrice, setUpdatedPrice] = useState(props.price);

    function handleChangeId(event) {
        setUpdatedId(event.target.value);
    }

    function handleChangeTitle(event) {
        setUpdatedTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setUpdatedAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setUpdatedPrice(event.target.value);
    }

    function handleUpdate() {
        if(isUpdating == false) {
            setIsUpdating(true);
        }
        else{
            let book = {
                id: updatedId,
                title: updatedTitle,
                author: updatedAuthor,
                price: updatedPrice
            }

            let newBooks = [...props.books];
            
            newBooks.map(
                (element, idx)=>{
                    if(element.id == props.id){
                        newBooks.splice(idx, 1, book);
                    }
                }
            )

            props.setBooks(newBooks);
            setIsUpdating(false);
        }
    }

    return (
        <div id="book-container">
            {isUpdating ? (
                <input  
                    type="text"
                    id="input-data1"
                    className="input-data"
                    onChange={handleChangeId}
                    value={updatedId}
                />
            ) : (
                <span id="container-data1" className="book-data">{props.id}</span>
            )}

            {isUpdating ? (
                <input
                    type="text"
                    id="input-data2"
                    className="input-data"
                    onChange={handleChangeTitle}
                    value={updatedTitle}
                />
            ) : (
                <span id="container-data2" className="book-data">{props.title}</span>
            )}

            {isUpdating ? (
                <input
                    type="text"
                    id="input-data3"
                    className="input-data"
                    onChange={handleChangeAuthor}
                    value={updatedAuthor}
                />
            ) : (
                <span id="container-data3" className="book-data">{props.author}</span>
            )}

            {isUpdating ? (
                <input
                    type="text"
                    id="input-data4"
                    className="input-data"
                    onChange={handleChangePrice}
                    value={updatedPrice}
                />
            ) : (
                <span id="container-data4" className="book-data">{props.price}</span>
            )}

            <button id="update-btn" className="btn" onClick={handleUpdate}> {isUpdating ? "Save" : "Update"} </button>
            <button id="remove-btn" className="btn" onClick={() => props.handleRemove(props.id)}>
                Remove
            </button>
        </div>
    );
}

export default Book;
*/