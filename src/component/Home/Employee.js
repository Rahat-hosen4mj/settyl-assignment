import React from 'react';

const Employee = ({employee, handleDelete}) => {
    const {employee_name, _id} = employee;
    return (
<div class="card max-w-sm bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Name: {employee_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary">Update</button>
    <button  onClick={() => handleDelete(_id)} class="btn btn-primary">Hide</button>
    </div>
  </div>
</div>
    );
};

export default Employee;