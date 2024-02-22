import CheckIcon from '../assets/icon/Check.png'
import DeleteIcon from '../assets/icon/Vector.png'
import axios from 'axios'

function TodoItem (props) {

    const APIURL = `${process.env.REACT_APP_APIURL}/delete_task/${props.id}`

    const handleDelete = async() => {
     let res = await axios.delete(APIURL)
     if(res) {
        props.setTrigger(res)
     }
    }

    return(
        <div id='itemCon'>
            <img src={CheckIcon} alt='check' />
            <p>{props.name}</p>
            <img src={DeleteIcon} alt='delete' onClick={handleDelete} />
        </div>
    )
}

export default TodoItem