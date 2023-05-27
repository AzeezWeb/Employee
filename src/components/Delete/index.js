import React from "react";
import './Delete.css'
import { FaMapMarker } from 'react-icons/fa'


function Delete( {remove, setRemove, dispatch}) {
  return ( 
    <div className={ remove[0] ? "Delete active" : "Delete"}>
        <div className='Delete-box'>
            <div>
              <FaMapMarker />
            </div>
            <h2> Are you sure to delete this record?</h2>
            <p>You can't undo this operation</p>
            <button onClick={() => setRemove(false)}> No</button>
            <button onClick={() => {
              dispatch({type:"delete", payload:{id: remove[1]}})
              setRemove([false, ''])
            }}> Yes</button>
        </div>

    </div>
   );
}

export default Delete;