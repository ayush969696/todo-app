import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex items-center justify-center gap-12 mt-4">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyPress={handleKeyPress}
        placeholder="Add a new task" 
        className="border rounded p-2 w-[50%] border-gray-400"
      />
      <button 
        onClick={handleAddTask} 
        className="bg-orange-500 text-white rounded px-6 py-3 text-xl hover:bg-orange-700"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
