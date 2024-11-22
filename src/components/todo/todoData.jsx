
// props là một object {}
// {
//   "name": "John",
//   "age": 30
// data :{}
//}
const {name,age,data}=props;


const TodoData =(props)=>{
  console.log(">>Check props",props);
  
  return (
    <div className='todo-data'>
      <div>My name is :{name} </div>
    <div>Learning react</div>
  </div>
  )
}

export default TodoData;