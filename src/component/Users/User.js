import React from "react";

const User = ({ user, handleHide }) => {
  const { email, first_name, last_name, avatar, _id } = user;
  return (
    <div className="card max-w-sm bg-green-50 text-black shadow-xl">
      <figure className="px-4 pt-4">
        <img src={avatar} alt="user" className="rounded" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {first_name} {last_name}
        </h2>
        <p>Email: {email}</p>
        <div className=" justify-end">
          <button className="btn btn-primary">Update</button>
          <button onClick={() => handleHide(_id)} className="btn btn-primary ml-8">Hide</button>
        </div>
      </div>
    </div>
  );
};

export default User;
