import React, { useState } from 'react';
import Tag from './Tag';
import AddTag from './AddTag';

interface TaskFormState {
  taskName: string;
  description: string;
  priority: string;
  status: string;
  tags: string[];
}

const predefinedTags = ['HTML 5', 'CSS 3', 'TypeScript', 'React'];

const TaskForm = ({setTasks}) => {
  const [formState, setFormState] = useState<TaskFormState>({
    taskName: '',
    description: '',
    priority: '',
    status: '',
    tags: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTag = (tag: string) => {
    if (!formState.tags.includes(tag) && !predefinedTags.includes(tag)) {
      setFormState(prevState => ({
        ...prevState,
        tags: [...prevState.tags, tag],
      }));
    }
  };

  const selectTag = (tag: string) => {
    setFormState(prevState => ({
      ...prevState,
      tags: prevState.tags.includes(tag)
        ? prevState.tags.filter(t => t !== tag)
        : [...prevState.tags, tag],
    }));
  };

  const { taskName, description, priority, status, tags } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    setTasks(prevTasks => [
      ...prevTasks,
    formState,
    ]); 
    setFormState({
      taskName: '',
      description: '',
      priority: '',
      status: '',
      tags: [],
    });
  };

  return (
    <form className='flex flex-col justify-between body-font align-middle w-full p-8' onSubmit={handleSubmit}>
      <section>
        <input 
          type='text' 
          name='taskName'
          placeholder='Task Name'
          className='p-2 m-1 border border-[#023e8a] rounded-lg bg-inherit placeholder-black'
          value={taskName}
          onChange={handleInputChange}
          required
        />
        <input 
          type='text' 
          name='description'
          placeholder='Task Description'
          className='p-2 m-1 border border-[#023e8a] rounded-lg bg-inherit placeholder-black'
          value={description}
          onChange={handleInputChange}
          required
        />
      </section>
      <section className='flex justify-between'>
        <div className='flex'>
          {predefinedTags.map((tag, index) => (
            <Tag key={index} tag={tag} selectTag={selectTag} isSelected={tags.includes(tag)} />
          ))}
          {tags.map((tag, index) => (
            !predefinedTags.includes(tag) && <Tag key={index} tag={tag} selectTag={selectTag} isSelected={tags.includes(tag)} />
          ))}
          <AddTag onAddTag={handleAddTag} />
        </div>
        <div>
          <select
            name='priority'
            className='p-2 m-2 border border-[#023e8a] rounded-lg placeholder-black bg-inherit'
            value={priority}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select Priority</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
          <select
            name='status'
            className='p-2 m-2 border border-[#023e8a] rounded-lg placeholder-black bg-inherit'
            value={status}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select Status</option>
            <option value='To Do'>To Do</option>
            <option value='Working'>Working</option>
            <option value='Done'>Done</option>
          </select>
          <button className='p-2 m-2 bg-[#a3cef1] rounded-lg'>Add Task</button>
        </div>
      </section>
    </form>
  );
};

export default TaskForm;
