
import './App.scss'
import TaskList from './components/TaskList/TaskList'


function App() {

  return (
    <div>
      <h1 className='todo'>ToDo List</h1>
      <div className='root_children'>
        <TaskList />
      </div>
    </div>
  )
}

export default App
