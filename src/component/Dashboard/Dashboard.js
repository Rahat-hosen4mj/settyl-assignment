import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {

  const [employees, setEmployees] = useState([]);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://morning-hamlet-36762.herokuapp.com/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  useEffect(() => {
    fetch("https://morning-hamlet-36762.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // const {data: users, } = useQuery(['user'], () => fetch('https://morning-hamlet-36762.herokuapp.com/users').then(res => res.json()))
  console.log(users)
  return (
    <div className="w-100 md:w-auto bg-rose-50 grid grid-cols-1 md:grid-cols-2 px-2 ">
       <div className="md:ml-3 mt-5 p-2 md:p-5">
        <h2 className="text-2xl text-blue-600 font-medium mb-5">
         User: name age and salary
        </h2>
        <BarChart width={450} height={420} data={users}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="first_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"age"} fill="#8884d8" />
          <Bar dataKey="salary" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="ml-5 mt-5 p-5">
        <h2 className="text-2xl text-blue-600 font-medium mb-5">
         Employee: name and salary
        </h2>
        <BarChart width={450} height={420} data={employees}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="employee_age" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"employee_name"} fill="#8884d8" />
          <Bar dataKey="employee_salary" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
