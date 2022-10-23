import React from 'react';

const Employee = ({employee, handleDelete,setUpdateEmployee}) => {
    const {employee_name,employee_salary, employee_age,_id} = employee;
    return (

<div class="card max-w-sm bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Name: {employee_name}</h2>
    <p>Salary: {employee_salary}</p>
    <p>Age: {employee_age}</p>
    <div class="card-actions justify-end">
    <label  onClick={() => setUpdateEmployee(employee)} htmlFor="updateEmployee" class="btn btn-primary">Update</label>
    <button  onClick={() => handleDelete(_id)} class="btn btn-primary">Delete</button>
    </div>
  </div>
</div>
    );
};

export default Employee;