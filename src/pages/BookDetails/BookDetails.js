import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId } = useParams();
    const [book, setBook] =useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/book/${bookId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])



    return (
        <div className='w-50 mx-auto my-5'>
            <h2 >Welcome to Book Management of :<br></br> 
           Book Name: {book.name}
            </h2>
            <h4>Price: {book.price}</h4>
            <h4>Supplier: {book.supplier}</h4>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-info'>Manage Book List</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;