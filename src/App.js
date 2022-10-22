import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import AddEmployee from './component/AddEmployee/AddEmployee';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
         <Route path='/' element={ <Home />}></Route>
         <Route path='/create' element={ <AddEmployee />}></Route>
       </Routes>
      
    </div>
  );
}

export default App;
