import React from "react";

const User = ({ user, handleHide,setUpdateUser }) => {
  const { email, first_name, last_name, avatar, _id } = user;
  return (
    <div className="card max-w-sm bg-green-50 text-black shadow-xl">
      <figure className="px-4 pt-4">
        <img  src={avatar} alt="user" className="rounded h-32 w-32" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {first_name} {last_name}
        </h2>
        <p>Email: {email}</p>
        <div className=" justify-end">
        <label  onClick={() => setUpdateUser(user)} htmlFor="updateUser" class="btn btn-primary">Update</label>
          
          <button onClick={() => handleHide(_id)} className="btn btn-primary ml-6">Hide</button>
        </div>
      </div>
    </div>
  );
};

export default User;
