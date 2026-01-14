import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    
    setTodos([...todos, newTodo])
    setInput('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const startEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (e, id) => {
    e.preventDefault()
    if (editText.trim() === '') return
    
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editText } : todo
    ))
    
    setEditId(null)
    setEditText('')
  }

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo App</h1>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button type="submit" className="btn btn-add">
            Add Task
          </button>
        </form>
        
        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one above!</p>
          ) : (
            <ul>
              {todos.map(todo => (
                <li 
                  key={todo.id} 
                  className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                  {editId === todo.id ? (
                    <form onSubmit={(e) => saveEdit(e, todo.id)} className="edit-form">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="edit-input"
                        autoFocus
                      />
                      <button type="submit" className="btn btn-save">
                        Save
                      </button>
                    </form>
                  ) : (
                    <>
                      <span 
                        className="todo-text"
                        onClick={() => toggleComplete(todo.id)}
                      >
                        {todo.text}
                      </span>
                      <div className="todo-actions">
                        <button 
                          onClick={() => startEdit(todo)}
                          className="btn btn-edit"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => deleteTodo(todo.id)}
                          className="btn btn-delete"
                        >
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {todos.length > 0 && (
          <div className="todo-stats">
            <span>
              {todos.filter(todo => !todo.completed).length} tasks left
            </span>
            <button 
              onClick={() => setTodos([])} 
              className="btn btn-clear"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
