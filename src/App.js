import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import AddEmployee from './component/AddEmployee/AddEmployee';
import Home from './component/Home/Home';
import Users from './component/Users/Users';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './component/Dashboard/Dashboard';
import AddUser from './component/AddUser/AddUser';

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
         <Route path='/' element={ <Home />}></Route>
         <Route path='/dashboard' element={ <Dashboard />}></Route>
         <Route path='/addUser' element={ <AddUser />}></Route>
         <Route path='/create' element={ <AddEmployee />}></Route>
         <Route path='/users' element={ <Users />}></Route>
       </Routes>
       <ToastContainer />
    </div>
  );
}

export default App;
