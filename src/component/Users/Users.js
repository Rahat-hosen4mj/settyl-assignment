import React, { useEffect, useState } from "react";
import User from "./User";
import { toast } from "react-toastify";
import UpdateModal from "./UpdateModal";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [showAll, setShowall] = useState([]);
  const [updateUser, setUpdateUser] = useState(null);
  const [id, setId] =useState('')

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setShowall(data);
      });
  }, [id]);

  const showAllUser = () => {
    setUsers(showAll);
  };

  const handleHide = (id) => {
    const proceed = window.confirm("are you sure to hide it");
    if (proceed) {
      fetch(`http://localhost:5000/user/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remain = users.filter((user) => user._id !== id);
          setUsers(remain);
          toast.success("User hide succesfully");
        });
    }
  };
  return (
    <div>
      <div className="bg-blue-100 px-6 md:px-10 py-10 md:py-4">
        <div className="flex justify-between">
          <h2 className="mt-0 text-black py-3 font-medium">
            Total user: {users?.length}
          </h2>
          <button
            onClick={showAllUser}
            className="btn btn-xs btn-primary mr-12"
          >
            showAll
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {users?.map((user) => (
            <User user={user} setUpdateUser={setUpdateUser} handleHide={handleHide} key={user._id}></User>
          ))}
           {
          updateUser &&  <UpdateModal updateUser={updateUser} setId={setId} setUpdateUser={setUpdateUser} key={updateUser._id}></UpdateModal>
         }
        </div>
      </div>
    </div>
  );
};

export default Users;
