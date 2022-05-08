import React, { useEffect, useState } from 'react';
import Service from '../../Category/Category';
import './Categories.css';

const Categories = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-primary text-center mt-5'> CATEGORIES</h1>
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Categories;