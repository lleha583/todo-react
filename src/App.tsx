import { useContext } from 'react'
import './App.css'
import Posts from './components/Posts/Posts'
import Sidebar from './layout/Sidebar/Sidebar'
import ThemeContext from './context/ThemeContext'

function App() {
  console.log('render app')

  const theme = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={theme}>
      <Sidebar />
      <Posts />
    </ThemeContext.Provider>
  )
}

export default App
