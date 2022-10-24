import React from 'react';
import notFound from '../../image/nofound.png';

const NotFound = () => {
    return (
        <div>
             <img className='w-50 mx-auto' src={notFound} alt="" />
             <h2 className='text-3xl text-red-500 text-center font-medium'>Page not found</h2>
        </div>
    )
};

export default NotFound;