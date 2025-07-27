import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme)

  const handleToggle = () => {
    dispatch(toggleTheme());
  }

  const isDark = theme === 'dark';

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input 
      type="checkbox" 
      className='sr-only peer'
      checked={isDark}
      onChange={handleToggle}
      />

      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500
      dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600
      transition-colors duration-300"></div>

      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-5"></div>

    </label>
  )
}

export default ThemeToggle