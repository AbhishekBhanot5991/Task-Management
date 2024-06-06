import React,{ useState, useEffect } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

const  App =() =>{
  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
 
  const addTask = (task) => {
    setTasks([...tasks, task])
  };
  const markTaskAsCompleted = (taskId) => {
    setTasks(tasks.map (task =>
      task.id === taskId ? {...task, completed:true} : task
    ));
  }; 
  return (
    <div className='app bg-black h-screen p-5'>
        <h1 className='text-white text-lg mb-5 text-4xl'>Task Manager</h1>
        <TaskForm addTask = {addTask}/>
        <TaskList tasks = {tasks} markTaskAsCompleted= {markTaskAsCompleted}/>
    </div>
  )
}

export default App
