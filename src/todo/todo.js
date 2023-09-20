import React, { useState } from 'react';
import './todo.css';

const Todo = () => {
  const [todo, setToDo] = useState('');
  const [startedTime, setStartedTime] = useState('');
  const [todos, setToDos] = useState([]);
  const [editID, setEditID] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editID) {
      const editTodo = todos.find((i) => i.id === editID);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? { ...t, todo, startedTime, timestamp: new Date() }
          : t
      );
      setToDos(updatedTodos);
      setEditID(0);
      setToDo('');
      setStartedTime('');
      return;
    }

    if (todo !== '' && startedTime !== '') {
      setToDos([
        ...todos,
        {
          id: `${todo}-${Date.now()}`,
          todo,
          startedTime,
          timestamp: new Date(),
        },
      ]);
      setToDo('');
      setStartedTime('');
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setToDos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setToDo(editTodo.todo);
    setStartedTime(editTodo.startedTime);
    setEditID(id);
  };

  return (
   <div className='App'>
      <div
        className='container' 
       
      >
        <h1>Upcoming</h1>
        <form className='todoform' onSubmit={handleSubmit}>
         <span>
         <input
            type='text'
            value={todo}
            onChange={(e) => setToDo(e.target.value)}
            placeholder='Task'
          />
          
          
          </span> 
          <span>
          <input
            type='text'
            value={startedTime}
            onChange={(e) => setStartedTime(e.target.value)}
            placeholder='Started Time (e.g., 10:00 AM)'
          />


          </span>
         <span>
          <button type='submit'>{editID ? 'Edit' : 'Go'}</button> 
         </span>
          
        </form>

        <ul className='allTodos'>
          {todos.map((t) => (
            <li className='singleTodo' key={t.id}>
              <div className='todoText'>{t.todo}</div>
              <div className='todoInfo'>
                <span style={{ display: 'block' }}>
                  Start time: {t.startedTime}
                </span>
                <span style={{ display: 'block' }}>
                  Created date: {formatDate(t.timestamp)}
                </span>
              </div>
              <div className='todoButtons'>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
   
  );
};

const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
};

export default Todo;
