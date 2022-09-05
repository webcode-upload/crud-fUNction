import React ,{useState, useEffect}from 'react';
import './App.css';

import axios from 'axios';

import {Link} from 'react-router-dom'; //for edit purpose

export default function Employee() {
  const url="http://localhost:3000/employee";
  const[emplist,updateemp]=useState([]);
  const getEmp=()=>{
     fetch(url)
     .then(response => response.json())
     .then(allEmp=>updateemp(allEmp))
  }

  useEffect(()=>{
    getEmp();
  },[true]);


  //for delete
  const[message , updatemsg] = useState('');
  const deleteemp=(empid)=>{
        // alert(empid);
        axios.delete("http://localhost:3000/employee/" + empid)
        .then(response=>{
          updatemsg("Employee info deleted Successfully");
          getEmp(); //to reload the list after deleing record
        }).catch(error=>{
          updatemsg("Error ! Try again");
        })
       
  }

  return (
    <>
    <div><h2>Avaible employee : {emplist.length}</h2>
          <p id="chngecol">{message}</p>
    </div>
    <div className="table-responsive">
    <table className="table table-bordered table-hover" id="emplist">
      <thead>
        <tr className='table-success'>
          <th>Id</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
       
        {
          
          emplist.map((empinfo,index)=>{
           return(
            <tr key={index}>
              <td>{empinfo.id}</td>
              <td>{empinfo.name}</td>
              <td>{empinfo.mobile}</td>
              <td>{empinfo.department}</td>
              <td>{empinfo.salary}</td>
              <td>
              <Link className="btn btn-warning mx-1" to={`/${empinfo.id}/editemp`}>Edit</Link>
              <button className='btn btn-danger' onClick={deleteemp.bind(this,empinfo.id)}>Delete</button>
              </td>
            </tr>
           )
        })
        }
       
          
      </tbody>
    </table>
  </div>

</>
  )
}
