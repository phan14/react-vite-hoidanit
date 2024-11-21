import './components/todo/todo.css'
import TodoData from './components/todo/todoData'
import TodoNew from './components/todo/todoNew'
import logo from './assets/react.svg';


const App =()=>{
  return (
    <div className="todo-container">
       <div className="todo-tile"> Todo list </div>
       <TodoNew/>
       <TodoData/>

      <div className='todo-image'>
        <img src={logo} className='logo'/>
      </div>

      
       </div>
  )
}

export default App