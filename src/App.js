import { useState, useEffect } from 'react';
import './App.css';
import './styles/todo.css';
import Container from './components/Container';
import axios from 'axios';


function App() {

  const [todoItems, setTodoItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [trigger, setTrigger] = useState(false)

  const getTaskAPI = `${process.env.REACT_APP_APIURL}/get_task`

  useEffect(()=>{
    setLoading(true)

    async function getTask (){
      let data =  await axios.get(getTaskAPI)
      if (data){
        setLoading(false)
      }
      setTodoItems(data.data.reverse())
   } 
   getTask()

  },[trigger])

  return (
    <div className="App">
      <Container  loading={loading} todoItems={todoItems} setTrigger={setTrigger}/>
    </div>
  );
}
export default App;
