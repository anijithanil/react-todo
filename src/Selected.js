import React from 'react'
import './App.css';

function Selected(props) {
    const toDos=props
  return (
    <div>
      {
        toDos.map((ob) => {
            return (
              <h2>
                {ob.status && ob.title}
              </h2>
            )
            })
      }
    </div>
  )
}

export default Selected
