import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {toggleTodo, deleteTodo, editTodo} from '../features/todos/todoSlice'
import {Pencil, Save, Trash} from 'lucide-react'  

const priorityColors = {
  high: 'border-l-1.5 border-red-500',
  medium: 'border-l-1.5 border-yellow-500',
  low: 'border-l-1.5 border-green-500',
}

function TodoItem({todo}) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate?.split('T')[0] || '');
  const [editPriority, setEditPriority] = useState(todo.priority || 'low');

  const handleToggleComplete = () => {
    dispatch(toggleTodo({ id: todo.id }));
  }

  const handleSave = () => {
    if (editText.trim === "") return;
    dispatch(editTodo({ id: todo.id, text: editText, dueDate: editDueDate, priority: editPriority }));
    setIsEditing(false);
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
  }

  return (
    <div
      className={`flex items-center justify-between border-l-4 p-3 rounded-xl shadow-sm bg-white dark:bg-gray-800 
        ${priorityColors[todo.priority]}`}
    >
      <div className="flex items-start gap-3 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo({ id: todo.id }))}
          className="mt-1 accent-gray-700 dark:accent-gray-300"
        />

        <div className="flex flex-col w-full">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="w-full px-2 py-1 rounded-md border dark:bg-gray-700 dark:text-white"
              />
              <input
                type="date"
                value={editDueDate}
                onChange={(e) => setEditDueDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-fit mt-2 px-2 py-1 rounded-md border dark:bg-gray-700 dark:text-white"
              />
              <select
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                className="w-fit mt-2 px-2 py-1 rounded-md border dark:bg-gray-700 dark:text-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </>
          ) : (
            <>
              <span
                className={`text-lg ${
                  todo.completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'
                }`}
              >
                {todo.text}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-300">
                Due: {todo.dueDate?.split('T')[0] || '—'}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="ml-4 flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-500 hover:text-green-700 dark:hover:text-green-300"
          >
            <Save size={22} />
          </button>
        ) : (
          <button
            onClick={() => {
              setIsEditing(true);
              setEditText(todo.text);
              setEditDueDate(todo.dueDate?.split('T')[0] || '');
            }}
            className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            <Pencil size={22} />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 dark:hover:text-red-300"
        >
          <Trash size={22} />
        </button>
      </div>
    </div>
  )
}

export default TodoItem