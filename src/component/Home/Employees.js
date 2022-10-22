import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Employee from "./Employee";
import { useQuery } from "react-query";

const Employees = () => {
//   const [employees, setEmployees] = useState([]);

  const {data: employees, refetch } = useQuery(['employee'], () => fetch('http://localhost:5000/employees').then(res => res.json()))


//   useEffect(() => {
//     fetch("http://localhost:5000/employees")
//       .then((res) => res.json())
//       .then((data) => setEmployees(data));
//   }, []);

  const handleDelete = (id) =>{
    console.log('delete data' ,id)
    const proceed = window.confirm('are you sure to delete');
    if(proceed){
      fetch(`http://localhost:5000/employee/${id}`,{
            method: "DELETE"
      })
      .then(res =>res.json())
      .then(data => {
        console.log(data);
        refetch()
        toast.success('Player Delete successfully')
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
