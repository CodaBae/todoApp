import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem";

function Container(props) {

  console.log(props.loading)
  return (
    <div id="container">
      <Header />
      <Input />
      <hr />
      <div>
        {props.loading ? <p style={{textAlign: 'center', padding:'5%'}}>loading...</p> : props.todoItems.map((item, index) => {
         return <TodoItem name={item.name} />;
        }) }
      </div>
    </div>
  );
}

export default Container;
