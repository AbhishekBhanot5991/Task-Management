import React, {useState} from 'react'

const  TaskForm = ({addTask}) => {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const task = {
            id: Date.now(),
            name: taskName,
            time:parseInt(taskTime, 10),
            completed:false,
            startTime: new Date().getTime()
        };
        addTask(task);
        setTaskName('');
        setTaskTime('')
    }
  return (
    <form onSubmit={handleSubmit} className='gap-5'>
        <input 
        type="text"
        placeholder='Task Name'
        value={taskName}
        onChange={(e)=> setTaskName(e.target.value)}
        required
        />
        <input 
        type="number"
        placeholder='Time in Minutes'
        value={taskTime}
        onChange={(e)=> setTaskTime(e.target.value)}
        required
        />
        <button type='submit bg-white text-white'>Add Task</button>
    </form>
  )
}

export default TaskForm