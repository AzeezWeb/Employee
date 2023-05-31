import React, { useState } from "react";
import './Table.css'
import { FaPencilAlt } from 'react-icons/fa'
import { AiOutlineArrowDown} from 'react-icons/ai'

function EmployeTable( { setRemove, data, setChangeId }) {
  
  const thaadData = [
    { 
      id: 1,
      name: 'Employee Name',
      action: false
    },
    { 
      id: 2,
      name: 'Email Address ( Personal)',
      action: false
    },
    { 
      id: 3,
      name: 'Mobile Number',
      action: false
    },
    { 
      id: 4,
      name: 'Department',
      action: false
    },
    { 
      id: 5,
      name: 'Actions',
      action: false
    },
  ]
  
  const [state, setState] = useState(thaadData)
  const [arrowTop, setArrowTop] = useState(true);
  const Filter = (e) => {
    setState((items) => {
      const updateItems = [...items];
      const changedItems = updateItems.map((item) => {
        if(Number(e.target.id) ===  item.id) {
          setArrowTop(!arrowTop)
          sortData(data, 'name', arrowTop )
          return {
            ...item,
            action: true,
          }
        } else { 
          return {
            ...item, 
            action: false,
          }
        }
      })
      return changedItems;
    })
  }

  const sortData = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0 ) 


  const styleTh = (el) => {
    if(el.action === true && arrowTop === true) {
      return 'active bottom'
    } if(el.action === true && arrowTop !== true) {
      return ' active top'
    } else {
      return ''
    }
  }

  return ( 
    <div>
      <table>
        <thead>
          <tr>
            {state.map((el) => (
              <th 
                key={el.id}
                id={el.id}
                className={styleTh(el)}
                onClick={Filter}
              >
              {el.name} <AiOutlineArrowDown/>
              </th>))}
          </tr>
        </thead>
        <tbody>
         { data.map((item, ind) => (
          <tr key={item.id}> 
          <td className="Name">{item.name}</td>
          <td className="Email">{item.email}</td>
          <td className="Mobile">{item.mobile}</td>
          <td className="Department">{item.department}</td>
          <td className="flex"> 
            <div 
              className="Change"
              onClick={() => {
                      setChangeId([true, item, ind])
                      }}
            > <FaPencilAlt/></div>
            <div
               className="Delete-item"
               onClick={ () => setRemove([true, item.id])}
               ></div>
          </td>
        </tr>
         ))}
        </tbody>
      </table>
    </div>
   );
}

export default EmployeTable;