import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task ? task.text : '');

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };

  if (!task) {
    return null;
  }

  return (
    <li className="flex items-center justify-between my-6 mx-4 bg-white p-6 rounded shadow-lg">
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
          className="border rounded p-1 w-full"
        />
      ) : (
        <span className='text-xl'>{task.text}</span>
      )}
      <div className="flex items-center space-x-2">
        <button 
          onClick={handleEdit} 
          className="bg-green-500 text-white rounded px-6 py-2 hover:bg-green-700"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button 
          onClick={handleDelete} 
          className="bg-red-500 text-white rounded px-6 py-2 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
