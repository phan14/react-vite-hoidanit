import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import logo from './assets/react.svg';


const App =()=>{

  const hoidanit ='phan';
  const age =23
  const data={
    address :"Quang Nam",
    country: "viet nam"
  }



  return (
    <div className="todo-container">
       <div className="todo-tile"> Todo list </div>
       <TodoNew/>
       <TodoData
       name ={hoidanit}
       age={age}
       data={data}
       />

      <div className='todo-image'>
        <img src={logo} className='logo'/>
      </div>

      
       </div>
  )
}

export default App