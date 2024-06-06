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
    <div className='m-auto w-100'>
    <form onSubmit={handleSubmit} className="m-auto ">
        <div className="mb-1 ">
        <input 
        type="text"
        placeholder='Task Name'
        className='py-2 px-5 gap-10'
        value={taskName}
        onChange={(e)=> setTaskName(e.target.value)}
        required
        />
        </div>
        <div className="mb-1 ">

        <input 
        type="number"
        className='py-2 px-5 my-5'
        placeholder='Time in Minutes'
        value={taskTime}
        onChange={(e)=> setTaskTime(e.target.value)}
        required
        />
        </div>
        <button type='submit ' className="font-medium text-white bg-slate-900 px-7 py-2">Add Task</button>
    </form>
    </div>
  )
}

export default TaskForm