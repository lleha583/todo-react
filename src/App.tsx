
import { Outlet } from 'react-router-dom'
import './App.scss'
import SideBar from './layout/SideBar'


function App() {


  return (
    <>
      <SideBar />
      <div className='root_children'>
        <Outlet />
      </div>
    </>
  )
}

export default App
