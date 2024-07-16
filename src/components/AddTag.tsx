import React, { useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';

interface AddTagProps {
  onAddTag: (tag: string) => void;
}

const AddTag: React.FC<AddTagProps> = ({ onAddTag }) => {
  const [newTag, setNewTag] = useState<string>("");

  const handleCapitalize = (tag: string): string => {
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  };

  const handleAddTag = (e: FormEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (newTag.trim() !== "") {
      onAddTag(handleCapitalize(newTag.trim()));
      setNewTag("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTag(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add a New Tag"
        value={newTag}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddTag(e);
          }
        }}
        className="p-2 m-2 border rounded-lg border-[#023e8a] bg-inherit placeholder-black"
      />
      <button
        disabled={newTag.trim() === ""}
        onClick={handleAddTag}
        className="m-2 p-2 border border-[#023e8a] rounded-lg"
      >
        Add Tag
      </button>
    </>
  );
};

export default AddTag;
