import React, { useState } from 'react';

interface AddTagProps {
  onAddTag: (tag: string) => void;
}

const AddTag: React.FC<AddTagProps> = ({ onAddTag }) => {
  const [tagName, setTagName] = useState('');

  const handleAddTag = (e: React.FormEvent) => {
    e.preventDefault();
    if (tagName.trim()) {
      onAddTag(tagName.trim());
      setTagName('');
    }
  };

  return (
    <div className='flex items-center'>
      <input
        type='text'
        value={tagName}
        onChange={(e) => setTagName(e.target.value)}
        placeholder='New Tag'
        className='p-2 m-1 border border-[#023e8a] rounded-lg bg-inherit placeholder-black'
      />
      <button onClick={handleAddTag} className='p-2 m-2 bg-[#a3cef1] rounded-lg'>Add</button>
    </div>
  );
};

export default AddTag;
