import React from "react";
import './Employees.css'
import { HiUsers} from 'react-icons/hi'
import { AiOutlineSearch } from 'react-icons/ai'
import EmployeTable from "../Table";
import { useState } from "react";



function Employees( { addNew, setRemove,  data, dispatch, setChangeId}) {
  const [value, setValue] = useState('')
 
  const search = (e) => { 
    setValue(e.target.value)
  }
  const filter = data.filter((item) => {
    return item.name.toLowerCase().includes(value)
  })

  return ( 
  <>
    <div className="Employee">
        <div className="Employee-title"> 
          <div className="Employee-icon">
            <HiUsers/>
          </div>
          <div className="title">
            <h1> New Employee</h1>
            <p> Form design width validation</p>
          </div>
        </div>
        <div className="Employee-bg">
          <div className="Employee-box">
            <div className="Employee-search">
              <p> Search Employees</p>
              <AiOutlineSearch />
              <input type="text" onChange={search}/>
            </div>
            <div className= "Employee-add-btn" onClick={() => addNew(true)}> 
            <span> + </span><p> Add New</p>
            </div>
          </div>
          <EmployeTable  setRemove={setRemove}  data={value === '' ? data : filter} dispatch={dispatch} setChangeId={setChangeId}/>
        </div>
    </div>
  </>
   );
}

export default Employees;