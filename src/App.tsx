import React, { useState, useEffect } from 'react';
import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';

import TodoIcon from './assets/todo.svg';
import WorkingIcon from './assets/working-schedule.svg';
import DoneIcon from './assets/done.svg';

interface Task {
  id: number;
  title: string;
  status: 'To Do' | 'Working' | 'Done';
}

const oldTasks = localStorage.getItem('tasks');
console.log(oldTasks);

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(oldTasks ? JSON.parse(oldTasks) : []);

  useEffect(() => {
    if (oldTasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleDeleteTask = (taskIndex: number) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <>
      <h1 className="text-center text-3xl header-font m-2 p-4 bg-[#03045e] text-white rounded-lg">
        Your Modern To-Do
      </h1>
      <TaskForm setTasks={setTasks}/>
      <main className='flex justify-evenly'>
        <TaskColumn columnTitle='To Do' columnIcon={TodoIcon} tasks={tasks} status="To Do" handleDelete={handleDeleteTask} />
        <TaskColumn columnTitle='Working' columnIcon={WorkingIcon} tasks={tasks} status="Working" handleDelete={handleDeleteTask} />
        <TaskColumn columnTitle='Done' columnIcon={DoneIcon} tasks={tasks} status="Done" handleDelete={handleDeleteTask} />
      </main>
    </>
  );
};

export default App;