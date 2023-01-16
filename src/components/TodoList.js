import Todo from './Todo'
import ModalCreate from './Modal'

export default function TodoList({
    todos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodoText
  }) {
    return (
      <>
      <ModalCreate />
      <div className='newtodo'>
        <h1>Create Todo</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
          }}
        />
        </div>
        {todos.length ? (
          <>
<div className="nowlist">

            <h1>Todo Items</h1>
            <ul>
              {todos
                .filter((i) => !i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul>

            </div>

            <div className="neverlist">
            
            <h1>Completed Items </h1>
            <ul>
              {todos
                .filter((i) => i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul>
            </div>
          </>
        ) : (
          <h1>No Todos Added Yet</h1>
        )}
      </>
    )
  }