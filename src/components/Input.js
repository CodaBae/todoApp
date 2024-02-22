import AddIcon from '../assets/icon/Add_Plus.png'
import { useState } from 'react';
import axios from 'axios'

function Input(props) {

  const [taskName, setTaskName] = useState('')
  const handleTask = (e) =>{
    setTaskName(e.target.value)
  }
  const APIURL = `${process.env.REACT_APP_APIURL}/task`

  const data =  {
    name: taskName,
    date: new Date,
    isDone: false
}

 const postTodo = async() => {

   if (taskName.length > 0) {
    let res = await axios.post(APIURL,data)
   if (res){
    props.setTrigger(res)
    setTaskName('')
   }
   }

  }

  return (
    <div id='inputDiv'>
      <input id='inputTag' onChange={handleTask} value={taskName}/>
      <img id='addBtn' src={AddIcon} onClick={postTodo} />
    </div>
  );
}

export default Input;
