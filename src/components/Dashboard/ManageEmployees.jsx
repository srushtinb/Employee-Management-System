import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import Header from '../other/Header'

const ManageEmployees = () => {
    const [employees, setEmployees] = useContext(AuthContext)
    const [newEmployee, setNewEmployee] = useState({ firstName: '', email: '', password: '' })

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('employees'))
        if (stored) setEmployees(stored)
    }, [])

    const saveToLocalStorage = (data) => {
        localStorage.setItem('employees', JSON.stringify(data))
    }

    const addEmployee = () => {
        if (!newEmployee.firstName || !newEmployee.email || !newEmployee.password) {
            alert("Please fill all fields");
            return;
        }
        const updated = [...employees, { id: Date.now(), ...newEmployee, tasks: [], taskCounts: {} }]
        setEmployees(updated)
        saveToLocalStorage(updated)
        setNewEmployee({ firstName: '', email: '', password: '' })
    }

    const deleteEmployee = (id) => {
        const updated = employees.filter(e => e.id !== id)
        setEmployees(updated)
        saveToLocalStorage(updated)
    }

    return (
        <div className="p-7">
            <Header />
            <h2 className="text-xl font-bold mb-3">Manage Employees</h2>

            <div className='flex gap-2 mb-4'>
                <input
                    type="text"
                    placeholder="First Name"
                    value={newEmployee.firstName}
                    onChange={(e) => setNewEmployee({ ...newEmployee, firstName: e.target.value })}
                    className="border p-2 rounded text-black"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                    className="border p-2 rounded text-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={newEmployee.password}
                    onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
                    className="border p-2 rounded text-black"
                />
                <button onClick={addEmployee} className='bg-green-600 text-white px-4 rounded'>Add</button>
            </div>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2">First Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map((emp) => (
                        <tr key={emp.id}>
                            <td className="border p-2">{emp.firstName}</td>
                            <td className="border p-2">{emp.email}</td>
                            <td className="border p-2">
                                <button onClick={() => deleteEmployee(emp.id)} className="bg-red-600 text-white px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ManageEmployees
