import React from 'react';
import { toast } from 'react-toastify';

const UpdateModal = ({updateUser, setUpdateUser,setId}) => {
    const {_id} = updateUser;
   
    // console.log(_id);
    const handleBooking = event => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const age = event.target.age.value;
    const salary = event.target.salary.value;
     
    // console.log(firstName, lastName, email, age, salary);
      const user = {
          first_name: firstName ,
          last_name: lastName,
          email: email,
          age: age,
          salary: salary
      }

      fetch(`https://morning-hamlet-36762.herokuapp.com/user/${_id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
          .then(res => res.json())
          .then(data => {
            console.log(data)
             
                  toast(`User update successfully`)
                  setId(_id)
              setUpdateUser(null);
          });
  }
    return (
        <div>
        <input type="checkbox" id="updateUser" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label htmlFor="updateUser" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text"  name="firstName" placeholder='First Name'className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="lastName" placeholder='Last Name'  className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder='Email' className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='age'  className="input input-bordered w-full max-w-xs" placeholder='age (16 - 60)' />
                        <input type="number" name="salary" placeholder="Salary 0-200k" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="update" className="btn btn-secondary w-full max-w-xs" />
                    </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateModal;