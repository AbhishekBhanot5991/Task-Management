import React from 'react'

function TaskList({tasks, markTaskAsCompleted}) {
    const checkTaskStatus = (task)=>{
        const currentTime = new Date().getTime();
        const taskEndTime = task.startTime + task.time * 60000;

        if(task.completed){
            alert('Congratulations! You have completed the task on time.')
        } else if(currentTime > taskEndTime){
            alert("You failed to complete the task on time.")
        }
    }
  return (
    <ul>
        {tasks.map(task =>(
                <li key={task.id}>
                    {task.name} - {task.time} minutes
                    <button onClick={() => {markTaskAsCompleted(task.id); checkTaskStatus(task);}} className='bg-slate-600'>Mark as Completed</button>
                </li>
            ))
        }
    </ul>
  )
}

export default TaskList