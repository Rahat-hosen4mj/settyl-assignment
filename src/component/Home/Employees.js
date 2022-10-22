import React, { useEffect, useState } from "react";
import Employee from "./Employee";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleDelete = (id) =>{
    const proceed = window.confirm('are you sure to delete');
    if(proceed){
      fetch(`http://localhost:5000/employee/${id}`)
      .then(res =>res.json())
      .then(data => {
        console.log(data);
         const remain = employees.filter(employee => employee._id !== id);
         setEmployees(remain);
      
      })
    }
  }
  return (
    <div>
      <div className="bg-blue-100 px-6 md:px-10 py-10 md:py-4">
        <h2 className="mt-0 text-black py-3 font-medium">Total Employee: {employees?.length}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {employees?.map((employee) => (
            <Employee employee={employee} handleDelete={handleDelete} key={employee._id}></Employee>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
