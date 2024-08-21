import './sidebar.css'
import userLogo from '../../assets/user_logo.svg'
import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

export default function Sidebar() {
    const theme = useContext(ThemeContext)

    return (
        <section className='sidebar'>
            <div className='sidebar_user'>
                <div className='sidebar_user_logo'>
                    <img src={userLogo} alt="logo" />
                </div>
                <div className='sidebar_user_info'>
                    <h3>Klepcha</h3>
                    <p>Alexey</p>
                </div>
            </div>
            <div>
                <input onClick={()=>{theme.setTheme()}} type="checkbox" style={{width: '40px', height: '40px'}} />
            </div>
            <nav>

            </nav>
        </section>
    )
}