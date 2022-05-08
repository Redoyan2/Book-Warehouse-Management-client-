import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';

const Manage = () => {
    const [books, setBooks] = useState([]);

    useEffect( ()=>{
        fetch('http://secure-ocean-24441.herokuapp.com/book')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])
    return (
       <div>
            <div className='w-50 mx-auto my-5'>
        <h1>Manage Your Book </h1>
        {
            books.map(book=><div
            
                key={book._id}
                
            ><h3>{book.name} </h3> </div>)
        }
        </div>
        <div className='w-50 mx-auto my-5'>
        <Nav.Link href="addbook" className='text-warning'><button className='btn btn-info'>Add Book</button></Nav.Link>
        <Nav.Link href="managebook" className='text-warning'><button className='btn btn-info'>Manage Book</button></Nav.Link>
        </div>
       </div>
    );
};

export default Manage;