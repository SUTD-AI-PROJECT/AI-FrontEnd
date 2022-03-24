import Header from './components/Header'
import { useState, useEffect} from "react"
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Hero from './components/Hero';



function App() {
  const name = 'Brad'
  const x = true

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data= await res.json()

    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data= await res.json()

    return data
  }

// Add Task
const addTask = async (task) =>{
  const res = await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(task),
  
  })

  const data = await res.json()

  // const id = tasks.length+1
  // const newTask = {id, ...task}

  setTasks([...tasks, data])
}

// Delete Task
const deleteTask = async (id) =>{
  await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder = async (id) =>{
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body: JSON.stringify(updTask),
  
  })

  const data = await res.json()

  setTasks(tasks.map((task)=>task.id===id?{...task, reminder:!task.reminder}:task))
}

  return (
    <Router>
      <div className="container">
        <Header toggleAddTask={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/> 
        <Routes>
          <Route path='/' element={<Hero showAddTask={showAddTask} tasks={tasks} addTask={addTask} deleteTask={deleteTask} toggleReminder={toggleReminder} />}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
