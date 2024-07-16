import React from 'react'
import Tag from './Tag'
import DeleteIcon from '../assets/delete.svg'

const TaskCard = () => {
  return (
    <article className='p-2 m-1 bg-[#014f86] rounded-lg'>
        <h3>Task Title</h3>
        <p>Task Description</p>

        <div className='flex justify-between items-center'>
            <div>
                <Tag tag='Tag 1' />
                <Tag tag='Tag 2' />
            </div>
            <div>
            <img
                src={DeleteIcon}
                alt='Task Image'
                className='w-8 border-[#2a6f97] border-2 rounded-full bg-[#2a6f97] opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100 cursor-pointer'
            />

            </div>
            
        </div>

      
    </article>
  )
}

export default TaskCard
