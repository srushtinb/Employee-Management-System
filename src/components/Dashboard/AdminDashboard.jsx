import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import { Link } from 'react-router-dom'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header handleLogout={props.handleLogout} />

            <CreateTask />
            <AllTask />

            {/* Link to Manage Employees */}
            <Link to="/admin/employees" className="inline-block bg-blue-600 text-white px-4 py-2 rounded mt-5">
                Manage Employees
            </Link>
        </div>
    )
}

export default AdminDashboard
