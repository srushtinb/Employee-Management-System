import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-20 bg-[#1c1c1c] h-screen'>
            <Header/>
            <TaskListNumbers/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard