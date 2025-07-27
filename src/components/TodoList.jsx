import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
import {motion, AnimatePresence} from 'framer-motion'

const priorityValue = {
  high: 3,
  medium: 2,
  low: 1
}

function TodoList() {
  const todos = useSelector((state) => state.todos.todos)
  const {status, sortBy, sortOrder} = useSelector((state) => state.filters)

  const filtered = todos.filter((todo) => {
    if (status === "completed") return todo.completed;
    if (status === "pending") return !todo.completed;
    return true;
  })

  const sorted = [...filtered].sort((a,b) => {
    let valA, valB;
    if (sortBy === "date"){
      valA = new Date(a.dueDate || 0).getTime();
      valB = new Date(b.dueDate || 0).getTime();
    }
    else{
      valA = priorityValue[a.priority] || 0;
      valB = priorityValue[b.priority] || 0;
    }

    return sortOrder === 'asc' ? valA - valB: valB - valA;
  })

  return (
    <div className="flex flex-col gap-3 mt-4 w-full max-w-2xl mx-auto">
      <AnimatePresence mode='popLayout'>
        {sorted.length > 0 ? (
          sorted.map((todo, index) => (
            <motion.div 
            key={todo.id} 
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            transition={{duration: 0.5, delay: index * 0.3
            }}>
              
            <TodoItem key={todo.id} todo={todo}/>
          </motion.div>
        ))) :
          (
          <motion.p
          key="empty"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          className='text-center text-gray-600 dark:text-gray-200'>
            Add todos
          </motion.p>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default TodoList