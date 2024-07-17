import React from 'react';
import TaskCard from './TaskCard';

interface TaskColumnProps {
  columnIcon: string;
  columnTitle: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ columnIcon, columnTitle }) => {
  return (
    <div className='w-full p-2 body-font'>
      <section className='bg-[#a3cef1] rounded-lg p-6 m-1 flex justify-center items-center'>
        <img src={columnIcon} className='w-8 m-2' alt="Column Icon" />
        <h2 className='text-2xl'>{columnTitle}</h2>
      </section>
      <TaskCard />
    </div>
  );
}

export default TaskColumn;
