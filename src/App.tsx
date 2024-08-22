
import './App.css'
import Filter from './components/Filter/Filter'
import  Task  from './components/Task/Task'


function App() {


  return (
    <>
        <h1>ToDo List</h1>  
        <section>
          <Filter />
        </section>
        <section>
          <Task />
        </section>
    </>
  )
}

export default App
