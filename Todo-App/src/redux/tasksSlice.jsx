import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.text = text;
      }
      saveTasksToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
