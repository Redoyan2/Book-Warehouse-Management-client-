import React from 'react';
import notFoundImg from '../../Images/NotFound/notFound-1.webp';

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-50 ' src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;