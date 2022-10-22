import React from 'react';

const UpdateModal = ({updateUser}) => {
    const {email} = updateUser
    return (
        <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h2>This is update modal : {email} </h2>
  
            <label htmlFor="my-modal-6" className="btn btn-primary btn-sm w-32">
            close
          </label>
          </div>
        </div>
      </div>
    );
};

export default UpdateModal;