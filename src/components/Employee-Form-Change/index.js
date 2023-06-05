import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import InputMask from 'react-input-mask';

function EmployeeFormChange({ changeId, setChangeId, dispatch  }) {

  
  const [value, setValue] = useState('')
  
  useEffect(() => {
    setValue({
      id: changeId[1].id,
      name: changeId[1].name,
      email: changeId[1].email,
      mobile: changeId[1].mobile,
      city: changeId[1].city,
      department: changeId[1].department,
    })
  },[changeId])
  console.log(value);
  console.log(value);
  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch( { type: 'Change', payload: { value: value}})
    setChangeId(false, )
    
  }


  const inputHandler = (e) => {
    const { name, value} = e.target;
    setValue((prev) => ( {...prev, [name]: value}))
  } 
  return (
    <div className={changeId[0] ? "Employee-Form-bg active" : "Employee-Form-bg"}>
      <div className="Employee-Form">
        <div className="Employee-Form-title">
          <h2> Employee Form </h2>
          <button onClick={() => setChangeId([false, ''])}></button>
        </div>
        <form  onSubmit={SubmitHandler}>
          <div>
            <input
              defaultValue={value.name}
              id="full-name"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={inputHandler}
            />
            <input
              defaultValue={value.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputHandler}
            />
            <InputMask mask='+(999) 99 999-99-99'
              defaultValue={value.mobile}
              id="number"
              name="mobile"
              placeholder="Mobile"
              onChange={inputHandler}
            />
            <input
              id="city"
              type="text"
              name="city"
              placeholder="City"
              onChange={inputHandler}
            />
          </div>
          <div>
            <p> Gender</p>
            <div className="Form-Gender">
              <label>
                <input type="radio" defaultValue="Male" defaultChecked name="Gender" />
                <span>Male</span>
              </label>
              <label>
                <input type="radio" defaultValue="Famele" name="Gender" />
                <span>Famele</span>
              </label>
              <label>
                <input type="radio" defaultValue="Other" name="Gender" />
                <span>Other</span>
              </label>
            </div>
            <select onChange={inputHandler}  name="department">
              <option selected value="Department">Department</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Accounting">Accounting</option>
              <option value="HR"> HR</option>
            </select>
            <label>
              <Calendar className="p-datepicker-today" dateFormat="dd/mm/yy"  showIcon/>
            </label>
            <label className="checkbox">
              <input type="checkbox" value='checkbox' />
              <span>Permament Employee</span>
            </label>
            <div className="Form-btn">
              <button  type="submit" >Submit </button> 
              <button type="reset" onClick={() => setValue('')}> Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeFormChange;
