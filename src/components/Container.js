import Header from "./Header";
import Input from "./Input";
import TodoItem from "./TodoItem";

function Container() {
  return (
    <div id='container'>
      <Header />
      <Input />

      <hr />

      <TodoItem />
    </div>
  );
}

export default Container;
