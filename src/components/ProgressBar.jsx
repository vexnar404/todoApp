import React from 'react'
import {useSelector} from 'react-redux'
import ThemeToggle from './ThemeToggle';

function ProgressBar() {
  const todos = useSelector((state) => state.todos.todos);
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed/ total) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className=" px-6 py-5 border border-gray-500 rounded-3xl  dark:border-gray-100">
        <div className="flex justify-between items-center mb-1">
          <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
            Progress: {completed}/{total} completed
          </span>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {progress}%
          </span>
        </div>
        <div className="w-full h-2.5 rounded-3xl bg-gray-200 dark:bg-gray-700" >
          <div className="bg-gray-800 dark:bg-gray-100 h-full rounded-3xl transition-all duration-300 ease-in-out" style={{width: `${progress}%`}}></div>
        </div>
      </div>

      <div className="flex justify-end mt-3 pr-2">
        <ThemeToggle />
      </div>
    </div>
    
    
  )
}

export default ProgressBar