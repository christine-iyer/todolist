import React, { useState } from 'react';
import Modal from 'react-modal';

const TodoListModal = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const handleInputChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem('');
  };

  const handleDeleteItem = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <Modal isOpen={true}>
      <h2>To-Do List</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={todoItem} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default TodoListModal;
