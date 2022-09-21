import {Button} from "../components/Button";
import {InputVeiw} from "../components/Input";
import {TodoItem} from "../components/TodoItem";
import {useState} from "react";

const TodoApp = () => {
  const[todoItems, setTodoItems] = useState([
      {id:1, item:"uth"},
      {id:2, item:"uth ne baka"},
      {id:3, item:"uth ne!!"}])

  const[newTodoItems, setNewTodoItems] = useState('')

  const onChangeEventhandler = (e) => {
    setNewTodoItems(e.target.value);
  }

  const handleOnSubmit = () => {
    if (todoItems.value === '')
    {
      return(alert("Please enter something!!"))
    }
  else
    {
      setTodoItems([...todoItems, {id: todoItems.length + 1, item: newTodoItems}])
      setNewTodoItems('')
    }
  }
  const handleOnReset = () => {
    // window.location.reload(false);
    setTodoItems([])
  }

  return(
      <div>
        <InputVeiw
            value={newTodoItems}
            placeholder={"Idhar likh"}
            onchange={onChangeEventhandler}/>
        <Button
            buttonTitle="Submit"
            onClick={handleOnSubmit}/>
        <Button
          buttonTitle={"Reset"}
          onClick={handleOnReset}/>

        {
          todoItems.map((items :{id:number, item:string}) => {
          return <TodoItem value = {items.item}/>
        })
        }
      </div>
  )

}
export default TodoApp