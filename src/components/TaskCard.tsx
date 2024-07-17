import Tag from './Tag'
import DeleteIcon from '../assets/delete.svg'

const TaskCard = () => {
  const dummySelectTag = () => {};
  const dummyIsSelected = true;

  return (
    <article className='p-2 m-1 bg-[#a3cef1] rounded-lg'>
        <h3>Task Title</h3>
        <p>Task Description</p>

        <div className='flex justify-between items-center'>
            <div className='flex'>
                <Tag tag='Tag 1' selectTag={dummySelectTag} isSelected={dummyIsSelected} />
                <Tag tag='Tag 2' selectTag={dummySelectTag} isSelected={dummyIsSelected} />
            </div>
            <div>
            <img
                src={DeleteIcon}
                alt='Task Image'
                className='w-8 border-[#a9d6e5] border-2 rounded-full bg-[#a9d6e5] opacity-40 transition-opacity duration-300 ease-in-out hover:opacity-100 cursor-pointer'
            />

            </div>
            
        </div>

      
    </article>
  )
}

export default TaskCard
