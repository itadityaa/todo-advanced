import React from 'react';
import Tag from './Tag';
import DeleteIcon from '../assets/delete.svg';

// Define props interface for TaskCard
interface TaskCardProps {
  task: {
    taskName: string;
    description: string;
    priority: string;
    tags: string[];
  };
  handleDelete: (taskIndex: number) => void;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, handleDelete, index }) => {
  const dummySelectTag = () => {};
  const dummyIsSelected = true;

  return (
    <article className='p-2 m-1 bg-[#a3cef1] rounded-lg'>
      <div className='flex justify-between'>
        <h3 className='text-2xl ml-1 font-semibold'>{task.taskName}</h3>
        <p className='mr-2'>{task.priority}</p>
      </div>
      
      <p className='m-1'>{task.description}</p>

      <div className='flex justify-between items-center'>
        <div className='flex'>
          {task.tags.map((tag, tagIndex) => (
            <Tag key={tagIndex} tag={tag} selectTag={dummySelectTag} isSelected={dummyIsSelected} />
          ))}
        </div>
        <div onClick={() => handleDelete(index)}>
          <img
            src={DeleteIcon}
            alt='Task Image'
            className='w-10 border-[#a9d6e5] border-2 rounded-full bg-[#a9d6e5] opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100 cursor-pointer'
          />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
