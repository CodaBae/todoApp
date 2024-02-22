import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem";

function Container(props) {

  return (
    <div id="container">
      <Header />
      <Input setTrigger={props.setTrigger} />
      <hr />
      <div>
        {props.loading ? <p style={{textAlign: 'center', padding:'5%'}}>loading...</p> : props.todoItems.map((item, index) => {
         return <TodoItem setTrigger={props.setTrigger}  name={item.name} id={item._id} />;
        }) }
      </div>
    </div>
  );
}

export default Container;
