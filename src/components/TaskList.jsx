import React, {useEffect} from 'react'
import { speak } from '../utils/utils'; 

const TaskList = ({ tasks, markTaskAsCompleted }) => {
    useEffect(() => {
      const interval = setInterval(() => {
        tasks.forEach(task => {
          if (!task.completed) {
            const currentTime = new Date().getTime();
            const taskEndTime = task.startTime + task.time * 60000; // converting minutes to milliseconds
            const timeLeft = taskEndTime - currentTime;
  
            if (timeLeft > 0 && timeLeft <= 300000) { // last 5 minutes
              const minutesLeft = Math.floor(timeLeft / 60000);
              const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
              speak(`You have to complete the task on time. ${minutesLeft} minutes and ${secondsLeft} seconds left.`);
            }
          }
        });
      }, 30000); // Check every 30 seconds
  
      return () => clearInterval(interval);
    }, [tasks]);

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
                <li key={task.id} className='text-white flex flex-col m-auto text-center my-5'>
                    {task.name} - {task.time} minutes
                    <button onClick={() => {markTaskAsCompleted(task.id); checkTaskStatus(task);}} className='bg-green-400 py-3 w-60 m-auto mt-4 text-white'>Mark as Completed</button>
                </li>
            ))
        }
    </ul>
  )
}

export default TaskList