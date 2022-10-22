import React from 'react';
import Users from '../Users/Users';
import Employees from './Employees';

const Home = () => {
    return (
        <div className='px-12'>
            <Users />
            <Employees />
           
        </div>
    );
};

export default Home;