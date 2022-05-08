import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const BookManage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://secure-ocean-24441.herokuapp.com/book')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    const handleRemove = id => {
        const proceed = window.confirm('Are you want to delete??');
        if (proceed) {
            const url = `http://secure-ocean-24441.herokuapp.com/book/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingBooks = books.filter(book => book._id !== id)
                    setBooks(remainingBooks);

                })
        }
    }

    return (
        <div>
            <div className='w-50 mx-auto my-5'>
                <h1>Manage Your Book </h1>
                {
                    books.map(book => <div

                        key={book._id}

                    ><h3>{book.name} <button onClick={() => handleRemove(book._id)}>Delete</button></h3> </div>)
                }
            </div>
            <div className=' w-50 mx-auto'>
                <Nav.Link href="addbook" className='w-50 mx-auto text-warning'><button className='btn btn-info'>Add Book</button></Nav.Link>
            </div>
        </div>
    );
};

export default BookManage;