import React from 'react'
import './App.css';

function List(props) {
    const [toDos,setTodos]=props
  return (
    <div>
      {
        toDos.map((obj) => {
            console.log(obj)
            return (
              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    setTodos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                        console.log(obj2.status)
                      }
                      return obj2
                    }))




                  }} type="checkbox" name="" id="" />

                  <p>{obj.title}</p>

                </div>
                <div className="right">
                  <i onClick={() => setTodos(toDos.filter((item) => item.id !== obj.id))} className="fas fa-times"></i>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default List
