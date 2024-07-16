import './App.css';
import TaskColumn from './components/TaskColumn';
import TaskForm from './components/TaskForm';

import TodoIcon from './assets/todo.svg';
import WorkingIcon from './assets/working-schedule.svg';
import DoneIcon from './assets/done.svg';

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl header-font m-2 p-4 bg-[#03045e] text-white rounded-lg">
        Your Modern To-Do
      </h1>
      <TaskForm />
      <main className='flex justify-evenly'>
        <TaskColumn columnTitle='To Do' columnIcon={TodoIcon} />
        <TaskColumn columnTitle='Working' columnIcon={WorkingIcon} />
        <TaskColumn columnTitle='Done' columnIcon={DoneIcon} />
      </main>
    </>
  );
};

export default App;
