import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import ManageEmployees from './components/Dashboard/ManageEmployees'

const App = () => {
  const [employees] = useContext(AuthContext)
  const [user, setUser] = useState(null) // null | 'admin' | 'employee'
  const [userData, setUserData] = useState(null) // will store employee data for name, etc.

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      setUserData(parsedUser.data || null)
    }
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminObj = { role: 'admin' }
      localStorage.setItem('loggedInUser', JSON.stringify(adminObj))
      setUser('admin')
      setUserData(null)
    } else if (employees) {
      const employee = employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        const employeeObj = { role: 'employee', data: employee }
        localStorage.setItem('loggedInUser', JSON.stringify(employeeObj))
        setUser('employee')
        setUserData(employee)
      } else {
        alert("Invalid Employee Credentials")
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setUser(null)
    setUserData(null)
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={user === 'admin' ? "/admin" : "/employee"} />}
        />
        <Route
          path="/admin"
          element={user === 'admin' ? <AdminDashboard handleLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/employees"
          element={user === 'admin' ? <ManageEmployees handleLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/employee"
          element={user === 'employee' ? <EmployeeDashboard data={userData} handleLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  )
}

export default App
