import AddIcon from '../assets/icon/Add_Plus.png'

function Input() {
  return (
    <div id='inputDiv'>
      <input id='inputTag'/>
      <img id='addBtn' src={AddIcon} />
    </div>
  );
}

export default Input;
