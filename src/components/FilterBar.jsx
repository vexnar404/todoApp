import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStatus, setSortBy, setSortOrder, resetFilters } from '../features/filter/filterSlice'

function FilterBar() {
  const dispatch = useDispatch();
  const { status, sortBy, sortOrder } = useSelector((state) => state.filters);

  return (
    <div className=" w-full max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 p-1 rounded-[50px]">
      
      {/* Status Filter */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Status:</label>
        <select
          value={status}
          onChange={(e) => dispatch(setStatus(e.target.value))}
          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-1.5 rounded-full focus:outline-none"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Sort By Filter */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-1.5 rounded-full focus:outline-none"
        >
          <option value="date">Date</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Sort Order Toggle */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Order:</label>
        <button
          onClick={() =>
            dispatch(setSortOrder(sortOrder === "asc" ? "desc" : "asc"))
          }
          className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-full transition-all duration-150"
        >
          {sortOrder === "asc" ? "Asc ↑" : "Desc ↓"}
        </button>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => dispatch(resetFilters())}
        className="bg-red-400 hover:bg-red-500 text-white p-2 rounded-full"
      >
        Reset Filters
      </button>
    </div>
  )
}

export default FilterBar