import React, { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Employees from './components/Employees'
import EmployeeForm from './components/Employee-Form';
import EmployeeFormChange from './components/Employee-Form-Change';
import Delete from './components/Delete';
import { useEffect } from 'react';


function App() {
  const reducer = (state, action) => {
    switch(action.type) {
      case 'Add' :
        return [ ...state,
          { id: Date.now(),
            name: action.payload.value.name,
            email: action.payload.value.email,
            mobile: action.payload.value.mobile,
            department: action.payload.value.department
          }
        ];
      case 'delete' :
        return state.filter((item) => action.payload.id !== item.id);
      case 'Change' : 
           const change = state.map((item) => {
            if(item.id === action.payload.value.id) {
              return { ...item, name: action.payload.value.name,
                                email: action.payload.value.email,
                                mobile: action.payload.value.mobile,
                                department: action.payload.value.department}
            } else { 
              return item
            }
           })
          return change;
 
        default: return state
    }
  }




  const [changeId, setChangeId] =useState([false, ''])
  const [ AddNew, setAddNew] = useState(false)
  const [ remove, setRemove ] = useState([false, 0])
  const [ data, dispatch] = useReducer(reducer, [], () => {
    const locData = localStorage.getItem("data")
    return locData ? JSON.parse(locData) : []
  })
  
  

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <div className="App">
      <div className='App-bg'></div>
      <div className='App-items'>
        <Header/>
        <Employees addNew={setAddNew} setRemove={setRemove}   data={data} dispatch={dispatch} setChangeId={setChangeId}/>
      </div>
      <EmployeeForm add={AddNew} setAdd={setAddNew} changeValue={changeId} dispatch={dispatch} />
      {changeId[0] ? <EmployeeFormChange changeId={changeId} setChangeId={setChangeId} dispatch={dispatch}/> : null}
      <Delete  remove={remove}  setRemove={setRemove} dispatch={dispatch}/>
    </div>
  );
}

export default App;
