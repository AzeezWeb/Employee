import React from "react";
import './Table.css'
import { FaPencilAlt } from 'react-icons/fa'

function EmployeTable( { chenge, setRemove, data, dispatch, setChangeId }) {
  return ( 
    <div>
      <table>
        <thead>
          <tr>
            <th> Employee Name</th>
            <th> Email Address ( Personal)</th>
            <th> Mobile Number</th>
            <th> Department</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
         { data.map((item) => (
          <tr key={item.id}> 
          <td className="Name">{item.name}</td>
          <td className="Email">{item.email}</td>
          <td className="Mobile">{item.mobile}</td>
          <td className="Department">{item.department}</td>
          <td className="flex"> 
            <div 
              className="Change"
              onClick={() => {
                      setChangeId([true, item])
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