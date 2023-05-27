import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Employees from './components/Employees'
import EmployeeForm from './components/Employee-Form';
import EmployeeFormChange from './components/Employee-Form-Change';
import Delete from './components/Delete';




function App() {

 
  const [changeId, setChangeId] =useState([false, ''])
  const reducer = (state, action) => {
    switch(action.type) {
      case 'Add' :
        return [ ...state,
          { id: Date.now(),
            name: action.payload.value.name,
            email: action.payload.value.email,
            mobile: action.payload.value.mobile,
            city: action.payload.value.city,
            department: action.payload.value.department
          }
        ];
      case 'delete' :
        return state.filter((item) => action.payload.id !== item.id);
      case 'Change' : 
         return [...state, state.forEach((item, ind) => {
          if(action.payload.value.id === item.id) {
            return [state.splice(ind, 1, action.payload.value)]
          } else { return state}
          
        })]
        default: return state
    }
  }
  const [ AddNew, setAddNew] = useState(false)
  const [ remove, setRemove ] = useState([false, 0])
  const [ data, dispatch] = useReducer(reducer, [])
  console.log(data);
  
  return (
    <div className="App">
      <div className='App-bg'></div>
      <div className='App-items'>
        <Header/>
        <Employees addNew={setAddNew} setRemove={setRemove}   data={data} dispatch={dispatch} setChangeId={setChangeId}/>
      </div>
      <EmployeeForm add={AddNew} setAdd={setAddNew} changeValue={changeId} dispatch={dispatch} />
      <EmployeeFormChange changeId={changeId} setChangeId={setChangeId} dispatch={dispatch}/>
      <Delete  remove={remove}  setRemove={setRemove} dispatch={dispatch}/>
    </div>
  );
}

export default App;
