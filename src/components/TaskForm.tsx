import { useState } from 'react';
import Tag from './Tag';
import AddTag from './AddTag';

const TaskForm = () => {
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (tag: string) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <form className='flex flex-col justify-between body-font align-middle w-full p-8'>
      <section>
        <input type='text' placeholder='Task Name' className='p-2 m-2 border border-[#023e8a] rounded-lg bg-inherit placeholder-black' />
        <input type='text' placeholder='Task Description' className='p-2 m-2 border border-[#023e8a] rounded-lg bg-inherit placeholder-black' />
      </section>
      <section>
        <div className='flex'>
          <Tag tag="HTML 5" onRemove={handleRemoveTag} />
          <Tag tag="CSS 3" onRemove={handleRemoveTag} />
          <Tag tag="TypeScript" onRemove={handleRemoveTag} />
          <Tag tag="React" onRemove={handleRemoveTag} />
          <AddTag onAddTag={handleAddTag} />
        </div>
        <div>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} onRemove={handleRemoveTag} />
          ))}
        </div>
        
      </section>
      <section className='flex justify-between'>
        <select className='p-2 m-2 border border-[#023e8a] rounded-lg placeholder-black bg-inherit'>
          <option value=''>Select Priority</option>
          <option value='1'>Low</option>
          <option value='2'>Medium</option>
          <option value='3'>High</option>
        </select>
        <button className='p-2 m-2 bg-[#0077b6] text-white rounded-lg'>Add Task</button>
      </section>
    </form>
  );
};

export default TaskForm;
