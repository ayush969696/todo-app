import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No tasks available</p>;
  }

  return (
    <ul className="mt-4 space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
