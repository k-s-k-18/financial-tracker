import {Routes, Route} from 'react-router';

import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import Signup from './components/Signup';
import './components/Dashboard.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
