import React, { useState } from "react";
import "./EmployeeForm.css";


const initialValue = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  department: "",
}
function EmployeeForm({ add, setAdd,  dispatch }) {
 


  const [value, setValue] = useState(initialValue);

  

  const SubmitHandler = (e) => {
    e.preventDefault();
    if(value.name !== '' && value.mobile.length <= 10 && value.department !== '' && value.email !== '') {
      dispatch( { type: 'Add', payload: { value: value}})
      setAdd(false)
      setValue(initialValue)
    } 
  }

  
  const inputHandler = (e) => {
    const { name, value} = e.target;
    setValue((prev) => ( {...prev, [name]: value}))

  } 
  return (
    <div className={add ? "Employee-Form-bg active" : "Employee-Form-bg"}>
      <div className="Employee-Form">
        <div className="Employee-Form-title">
          <h2> Employee Form</h2>
          <button onClick={() => setAdd(false)}></button>
        </div>
        <form onSubmit={SubmitHandler} >
          <div>
            <input
             
              value={value.name}
              id="full-name"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={inputHandler}
            />
            <input
              value={value.email}
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={inputHandler}
            />
            <input
              value={value.mobile}
              id="number"
              type="number"
              name="mobile"
              min={10}
              placeholder="Mobile"
              onChange={inputHandler}
            />
            <input
              value={value.city}
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
                <input type="radio" value="Male" defaultChecked name="Gender" />
                <span>Male</span>
              </label>
              <label>
                <input type="radio" value="Famele" name="Gender" />
                <span>Famele</span>
              </label>
              <label>
                <input type="radio" value="Other" name="Gender" />
                <span>Other</span>
              </label>
            </div>
            <select onChange={inputHandler} name="department">
              <option value="Department">Department</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Accounting">Accounting</option>
              <option value="HR"> HR</option>
            </select>
            <label>
              <input type="date" value="28.05.2023" />
            </label>
            <label className="checkbox">
              <input type="checkbox" value='checkbox' />
              <span>Permament Employee</span>
            </label>
            <div className="Form-btn">
              <button  type="submit" >Submit </button> 
              <button type="reset" onClick={() => setValue(initialValue)}> Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
