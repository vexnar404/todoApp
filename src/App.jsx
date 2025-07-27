import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import ProgressBar from "./components/ProgressBar"
import TodoForm from "./components/TodoForm"
import FilterBar from "./components/FilterBar"
import TodoList from "./components/TodoList"
import Confetti from "./components/Confetti"
import {motion} from 'framer-motion'


import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector((state) => state.theme.theme)

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }), [theme]
  
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className='min-h-screen bg-gray-100 dark:bg-gray-800'
    >
      <div className="min-h-screen p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Confetti />
        <Header />
        <ProgressBar />
        <TodoForm />
        <FilterBar />
        <TodoList />
      </div>
    </motion.div>
    
  )
}

export default App
