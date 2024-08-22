import './filter.css'
import iconTheme from '../../assets/icons/theme.svg'
import iconLoop from '../../assets/icons/loop.svg'

export default function Filter() {
    return (
        <>
            <div className='filter'>   
                <div className='search'>
                    <input type="text" />
                    <img className='icon' src={iconLoop} alt="" />
                </div>
                <div className='theme'>
                    <img src={iconTheme} alt="" />
                </div>
            </div>
        </>
    )
}