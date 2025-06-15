import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import AcceptTask from '../TaskList/AcceptTask';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('employees'));
    if (stored) setUserData(stored);
  }, []);

  const handleStatusChange = (employeeId, taskId, newStatus) => {
    const updatedUsers = userData.map(user => {
      if (user.id === employeeId) {
        const updatedTasks = user.tasks.map(task =>
          task.id === taskId ? { ...task, status: newStatus } : task
        );

        const taskCounts = {
          newTask: updatedTasks.filter(t => !t.status || t.status === 'new').length,
          active: updatedTasks.filter(t => t.status === 'active').length,
          completed: updatedTasks.filter(t => t.status === 'completed').length,
          failed: updatedTasks.filter(t => t.status === 'failed').length,
        };

        return { ...user, tasks: updatedTasks, taskCounts };
      }
      return user;
    });

    setUserData(updatedUsers);
    localStorage.setItem('employees', JSON.stringify(updatedUsers));
  };

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
      {userData.map(user => (
        <div key={user.id} className='mb-6'>
          <h2 className='text-xl font-semibold text-white mb-3'>{user.firstName}'s Tasks</h2>
          <div className='flex gap-4 flex-wrap'>
            {user.tasks && user.tasks.length > 0 ? (
              user.tasks.map(task => (
                <AcceptTask
                  key={task.id}
                  data={task}
                  employeeId={user.id}
                  onStatusChange={handleStatusChange}
                />
              ))
            ) : (
              <p className='text-gray-400'>No tasks assigned yet.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
