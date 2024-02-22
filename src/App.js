import { useState, useEffect } from 'react';
import './App.css';
import './styles/todo.css';
import Container from './components/Container';
import axios from 'axios';


function App() {

  const [todoItems, setTodoItems] = useState([])
  const [loading, setLoading] = useState(false)

  const getTaskAPI = 'https://adventurous-puce-cummerbund.cyclic.app/get_task'

  useEffect(()=>{
    setLoading(true)

    async function getTask (){
      let data =  await axios.get(getTaskAPI)
      if (data){
        setLoading(false)
      }
      setTodoItems(data.data)
   } 
   getTask()

  },[])

  return (
    <div className="App">
      <Container  loading={loading} todoItems={todoItems}/>
    </div>
  );
}

export default App;
