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
        <div>
            <h2>Welcome to Book Management of : {book.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-info'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;