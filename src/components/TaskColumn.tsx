import React from 'react';
import TaskCard from './TaskCard';

interface Task {
  id: number;
  title: string;
  status: 'To Do' | 'Working' | 'Done';
}

interface TaskColumnProps {
  columnTitle: string;
  columnIcon: string;
  tasks: Task[]; 
  status: 'To Do' | 'Working' | 'Done';
  handleDelete: (taskIndex: number) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ columnIcon, columnTitle, tasks, status, handleDelete }) => {
  // console.log(columnTitle, tasks, status);
  // tasks.map((task) => {
  //   console.log(task.status)
  //   });
  //   console.log(status); 
  //   console.log('----------------------------')
   
  
  return (
    <div className='w-full p-2 body-font'>
      <section className='bg-[#a3cef1] rounded-lg p-6 m-1 flex flex-col justify-center '>
        <div className='flex items-center justify-center'> 
          <img src={columnIcon} className='w-8 m-2' alt="Column Icon" />
          <h2 className='text-2xl'>{columnTitle}</h2> 
        </div>
       

        {tasks.map((task, index) => {
          // Check if task status matches the current column status
          if (task.status === status) {
            return (
              <TaskCard key={index} task={task} handleDelete={handleDelete} index={index}/>
            );
          }
          return null; // Return null if the condition is not met (optional)
        })}
      </section>
    </div>
  );
}

export default TaskColumn;
