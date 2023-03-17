import { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap//Button";

export default function Todo({ todo, completeTodo, editTodoText, deleteTodo }) {
  const [showInput, setShowInput] = useState(false)
  return (

    <Card>
      <div className="left">
        <Card.Title className='card-title'
          onClick={(e) => {
            setShowInput(!showInput)
          }}
        >
          {todo.text}
        </Card.Title>
        <input
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
      <Button
      className='btn btn-primary'
        checked={todo.completed}
        onClick={(e) => {
          deleteTodo(todo.id)
        }}
      >
        Delete Todo
      </Button>
    </Card>
  )
}