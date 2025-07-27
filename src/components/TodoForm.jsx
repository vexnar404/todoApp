import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todoSlice'

function TodoForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isAutoPriority, setIsAutoPriority] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === ''){
      alert('Please enter a task');
      return;
    }

    dispatch(addTodo({text, dueDate}))
    setText('');
    setDueDate('');
    setIsAutoPriority(true);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col md:flex-row items-center gap-4  p-4 rounded-xl shadow-sm mt-2 mx-auto w-[90%] max-w-2xl'>

          <input 
          type="text" 
          placeholder='Add a new task...'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className='flex-1 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none'
          />

          <input 
          type="date" 
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className='px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none'
          />

          <button
          type='submit'
          className='bg-gray-500 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-white text-white dark:text-gray-800 px-5 py-2 rounded-xl transition-colors'
          >
            Add
          </button>
      </form>
    </div>
  )
}

export default TodoForm