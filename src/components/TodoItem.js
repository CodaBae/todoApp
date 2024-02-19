import CheckIcon from '../assets/icon/Check.png'

function TodoItem () {
    return(
        <div>
            <img src={CheckIcon} />
            <p>some task</p>
        </div>
    )
}

export default TodoItem