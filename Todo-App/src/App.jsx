import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="font-bold text-center mt-6 mb-14 font-mono uppercase text-4xl">To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
