import React from 'react';
import Users from '../Users/Users';
import Employees from './Employees';

const Home = () => {
    return (
        <div className='px-4 md:px-10 bg-blue-50'>
            <Users />
            <Employees />
           
        </div>
    );
};

export default Home;