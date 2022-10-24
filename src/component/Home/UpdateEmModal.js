import React from 'react';
import { toast } from 'react-toastify';

const UpdateEmModal = ({setUpdateEmployee,updateEmployee,refetch}) => {
    const {_id} = updateEmployee;
   
    const handleEmployee = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const age = event.target.age.value;
    const salary = event.target.salary.value;
      const employee = {
        employee_name: name,
        employee_age: age,
        employee_salary: salary
      }

      fetch(`https://morning-hamlet-36762.herokuapp.com/employee/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(employee)
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
                  toast(`Employee update successfully`)
                 refetch() 
                 setUpdateEmployee(null);
          });
  }
    return (
        <div>
        <input type="checkbox" id="updateEmployee" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label htmlFor="updateEmployee" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleEmployee} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text"  name="name" placeholder='Enter Name'className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='age'  className="input input-bordered w-full max-w-xs" placeholder='age (16 - 60)' />
                        <input type="number" name="salary" placeholder="Salary 0-200k" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="update" className="btn btn-secondary w-full max-w-xs" />
                    </form>
          </div> 
        </div>
      </div>
    );
};

export default UpdateEmModal;