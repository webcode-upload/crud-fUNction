import React,{useState} from 'react';

//npm install axios
import axios from 'axios';

export default function Addemp() {
  const[empname,processname]=useState("");
  const[empmobile,processmobile]=useState("");
  const[empdept,processdept]=useState("");
  const[empsal,processsal]=useState("");
  const[message,processmsg]=useState("");

  const save=()=>{
   //alert(empname);
   
   var empinfo ={
      "name":empname,
		"mobile":empmobile,
		"department":empdept,
		"salary":empsal
   };
   const url="http://localhost:3000/employee";
   axios.post(url,empinfo)
   .then(response=> {
      processmsg(empname + "save successfully ")
         })

      processname("");
      processmobile("");
      processdept("");
      processsal("");
  }



  return (
    <>
    <h2>Add New Employee</h2>
   
  
    <div className='row'>
       <div className="col-md-3"></div>
          
       <div className="col-md-6 well">
       <form>
       <p >{message}</p>
          <div className="form-group">
             <label htmlFor="inputEmail">Name</label>
             <input type="text" className="form-control" value={empname} onChange={obj=>processname(obj.target.value)}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputMobile">Mobile</label>
              <input type="number" className="form-control"   value={empmobile}onChange={obj=>processmobile(obj.target.value)}/>
          </div>
          <div className="form-group">
               <label htmlFor="inputDeprtment">Deprtment</label>
               <input type="text" className="form-control" value={empdept} onChange={obj=>processdept(obj.target.value)}/>
          </div>
          <div className="form-group">
               <label htmlFor="inputSalary">Salary</label>
               <input type="text" className="form-control" value={empsal} onChange={obj=>processsal(obj.target.value)} />
          </div>
    
              <button type="submit" className="btn btn-primary"  onClick={save}>Add Details</button>
              
       </form>
       </div>

       <div className="col-md-3"></div>
    </div>
    
</>
  )
}
