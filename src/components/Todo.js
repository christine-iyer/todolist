import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap//Button";
import Form from "react-bootstrap//Form";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Todo({ todo, completeTodo, editTodoText, deleteTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (

    <Card>
      <div className="left">
        <Form.Text className='card-title'
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {todo.text}
        </Form.Text>
        <Form.Control
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              editTodoText(todo.id, e)
              setShowInput(false)
            }
          }}
        />
      </div>
      <label className="middle">
        Complete
        <input
          type="radio"
          checked={todo.completed}
          onChange={(e) => {
            completeTodo(todo.id, e)
          }}
        />
      </label>
      <button
      className='button'
        checked={todo.completed}
        onClick={(e) => {
          deleteTodo(todo.id)
        }}
      >
        Delete Todo
      </button>
    </Card>
  )
}