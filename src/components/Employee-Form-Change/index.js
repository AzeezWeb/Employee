import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";


function EmployeeFormChange({ changeId, setChangeId, dispatch  }) {
  
  const initialValue = {
    id: changeId[1].id,
    name: changeId[1].name,
    email: changeId[1].email,
    mobile: changeId[1].mobile,
    city: changeId[1].city,
    department: changeId[1].department,
  }
  console.log(changeId);
  const [value, setValue] = useState('')
  
  useEffect(() => {
      setValue(initialValue)
  },[changeId])


  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch( { type: 'Change', payload: { value: value}})
    setChangeId(false, '')
    setValue(initialValue)
  }


  const inputHandler = (e) => {
    const { name, value} = e.target;
    setValue((prev) => ( {...prev, [name]: value}))
  } 
  return (
    <div className={changeId[0] ? "Employee-Form-bg active" : "Employee-Form-bg"}>
      <div className="Employee-Form">
        <div className="Employee-Form-title">
          <h2> Employee Form 2</h2>
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
            <input
              defaultValue={value.mobile}
              id="number"
              type="number"
              name="mobile"
              placeholder="Mobile"
              onChange={inputHandler}
            />
            <input
              defaultValue={value.city}
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
            <select onChange={inputHandler} name="department">
              <option value="Department">Department</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Accounting">Accounting</option>
              <option value="HR"> HR</option>
            </select>
            <label>
              <input type="date"  />
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
