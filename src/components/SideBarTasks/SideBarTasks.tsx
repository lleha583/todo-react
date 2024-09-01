import "./sidebarTasks.scss";
import iconToday from "../../assets/icons/icon_today.svg";
import iconImportant from "../../assets/icons/icon_important.svg";
import iconComplete from "../../assets/icons/icon_complete_false.svg";

export default function SideBarTasks({ setStatus }: any) {

    const clickHandler = (e: any) =>{
        console.log(e.target.innerHTML)
        setStatus(e.target.innerHTML)
    }

  return (
    <div className="tasks_sidebar">
      <nav>
        <div onClick={clickHandler} className="tasks_sidebar_div">
          <img src={iconToday} />
          <button className="btn_task_sidebar">today</button>
        </div>
        <div onClick={clickHandler} className="tasks_sidebar_div">
          <img src={iconImportant} />
          <button className="btn_task_sidebar">important</button>
        </div>
        <div onClick={clickHandler} className="tasks_sidebar_div">
          <img src={iconComplete} />
          <button className="btn_task_sidebar">completed</button>
        </div>
      </nav>
    </div>
  );
}
