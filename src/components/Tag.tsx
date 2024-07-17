import React from 'react';

interface TagProps {
  tag: string;
  selectTag: (tag: string) => void;
  isSelected: boolean;
}

const Tag: React.FC<TagProps> = ({ tag, selectTag, isSelected }) => {
  return (
    <div
      className={`p-2 m-1 border ${isSelected ? 'border-[#023e8a] bg-[#a3cef1]' : 'border-[#023e8a]'} rounded-lg cursor-pointer`}
      onClick={() => selectTag(tag)}
    >
      {tag}
    </div>
  );
};

export default Tag;

