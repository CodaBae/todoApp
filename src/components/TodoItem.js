import CheckIcon from '../assets/icon/Check.png'

function TodoItem (props) {

    return(
        <div id='itemCon'>
            <img src={CheckIcon} alt='check' />
            <p>{props.name}</p>
        </div>
    )
}

export default TodoItem