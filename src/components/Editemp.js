import React,{useState,useEffect}from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Editemp() {

    const{id} = useParams();
    const[empname,processname]=useState("");
    const[empmobile,processmobile]=useState("");
    const[empdept,processdept]=useState("");
    const[empsal,processsal]=useState("");
    const[message,processmsg]=useState("");

    const getEmpinfo=()=>{
        const url="http://localhost:3000/employee/"+id;
        axios.get(url).then(response=>{
            processname(response.data.name);
            processmobile(response.data.mobile);
            processdept(response.data.dept);
            processsal(response.data.sal);
        })
    }

    useEffect(()=>{
        getEmpinfo();
    },[true])


    const updateemp=()=>{
        
        var empinfo={
            "name":empname,
            "mobile":empmobile,
            "department":empdept,
            "salary":empsal
         };
         const url="http://localhost:3000/employee/"+id;

         axios.put(url,empinfo).then(response=>{
            processmsg(empname + " update succefull");
         })
    }
  
  return (
    <>
    {/* <div>
      <h2>your id is :{id} </h2>
      <p >{message}</p>
      <p>{empname.message}</p> 
    </div> */}


 <div className='row'>
       <div className="col-md-3"></div>
          
       <div className="col-md-6 well">
       <form>
      <p>{message}</p>
          <div className="form-group">
             <label htmlFor="inputName">Name</label>
             <input type="text" className="form-control" placeholder="Name" value={empname} onChange={obj=>processname(obj.target.value)}/>
          </div>
          <div className="form-group">
              <label htmlFor="inputMobile">Mobile</label>
              <input type="number" className="form-control"  placeholder="Mobile" value={empmobile}onChange={obj=>processmobile(obj.target.value)}/>
          </div>
          <div className="form-group">
               <label htmlFor="inputDeprtment">Deprtment</label>
               <input type="text" className="form-control" value={empdept} onChange={obj=>processdept(obj.target.value)}/>
          </div>
          <div className="form-group">
               <label htmlFor="inputSalary">Salary</label>
               <input type="text" className="form-control" value={empsal} onChange={obj=>processsal(obj.target.value)} />
          </div>
    
              <button type="submit" className="btn btn-info" onClick={updateemp} >Update details</button>
                                               {/* onClick={updateemp} */}
              
       </form>
       </div>

       <div className="col-md-3"></div>
    </div> 
    </>
  )
}
