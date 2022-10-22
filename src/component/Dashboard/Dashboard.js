import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    fetch("http://localhost:5000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="w-auto bg-rose-50 ">
      <div className="ml-5 mt-5 p-5">
        <h2 className="text-2xl text-blue-600 font-medium mb-5">
          name and salary
        </h2>
        <BarChart width={500} height={420} data={employees}>
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
