import { useState } from 'react';
import './App.css';
import List from './List';
import Selected from './Selected';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const day = new Date();
  const d = day.getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
  const [status1, setStatus] = useState(true)




  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {dayNames[d]} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />


        <i onClick={() => setTodos([...toDos, { id: Date.now(), title: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="btn">
        <button onClick={() => { return (setStatus(!status1)) }}>Selected</button>
        {console.log("btn" + status1)}
      </div>


      <div className="todos">
        {status1 &&
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
        {
          !status1 && toDos.map((ob) => {
            return (
              <h2>{ob.status && ob.title}</h2>
            )
          })
        }
      </div>



    </div>

  );
}


export default App;
