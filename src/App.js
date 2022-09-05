
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Addemp from './components/Addemp';
import Employee from './Employee';
import Editemp from './components/Editemp'; //for editing

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <div className="container my-5">
          <Routes>
                <Route exact path="/"element={<Dashboard heading="Welcome to the dashboard"/>} />
                <Route exaxt path="/addemp" element={<Addemp />} />
                <Route exact path="/emplist" element={<Employee/>} />
                <Route exact path="/:id/editemp" element={<Editemp/>} />
          </Routes>
        </div>
    </Router>
    
    </>
  );
}

export default App;
