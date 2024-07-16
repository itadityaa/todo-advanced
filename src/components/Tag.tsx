import React from 'react';

interface TagProps {
  tag: string;
  onRemove?: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, onRemove }) => {
  return (
    <button
      className="m-2 p-2 border rounded-lg border-[#023e8a]"
    //   onClick={() => onRemove(tag)}
    >
      {tag}
    </button>
  );
};

export default Tag;
