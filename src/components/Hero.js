import Tasks from './Tasks';
import AddTask from './AddTask';

const Hero = ({showAddTask, tasks, addTask, deleteTask, toggleReminder}) => {
  return (
    <div>
      {showAddTask &&<AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks to Show'}
    </div>
  )
}

export default Hero
