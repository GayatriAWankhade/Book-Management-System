import React, { useEffect, useState } from 'react';
import Book from './components/Book';
import AddBook from './components/AddBook';
import useFetch from './useFetch';
import './App.css'


function App() {

  

    let { data, error } = useFetch('http://localhost:8000/books');
    let [books, setBooks] = useState(null);

    useEffect(()=>{
        setBooks(data);
    }, [data]);


    function handleRemove(id){
        let newBooks = books.filter(
            (element)=>{
                return element.id !=id;
            }
        )
        setBooks(newBooks);
    }   

    function handleSubmit(book) {
        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(() => {
                let newBooks = [...books];
                newBooks.push(book);
                setBooks(newBooks);
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });

    }
    function updateData(){
                
    }
   


    return(
        <div id="main-container">
            
            <AddBook handleSubmit={handleSubmit} />
            {
              books &&
                books.map(
                    (element)=>{
                        return <Book 
                                    key={element.id} 
                                    id={element.id} 
                                    title={element.title} 
                                    author={element.author} 
                                    price={element.price} 
                                    handleRemove={handleRemove}
                                    updateData = {updateData}
                                    books = {books}
                                    setBooks = {setBooks}
                                    >    
                                </Book>
                    }
                )
            }                    
        </div>
    );
}

export default App;
