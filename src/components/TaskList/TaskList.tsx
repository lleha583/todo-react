import { useState } from "react";
import "./taskList.scss";
import { ITask } from "../../interface/interface";
import dataTask from "../../data/dataTask.json";
import OpenTask from "./OpenTask";

export default function TaskList() {

  const [taskList, setTaskList] = useState<ITask[]>([...dataTask])
  const [modal, setModal] = useState(false)

  const changeCompleted = (id: number) => {
    const comp = taskList.filter((task: ITask) => {
      if(task.id == id) task.completed = !task.completed
      return true
    })
    setTaskList([...comp])
  }

  const changeImportant = (id: number) => {
    const imp = taskList.filter((task: ITask) => {
      if(task.id == id) task.important = !task.important
      return true
    })
    setTaskList([...imp])
  }

  const deleteTask = (id: number) => {
    const del = taskList.filter((task: ITask) => {
      if (task.id == id) return false;
      return true;
    })
    setTaskList([...del])
  }

  return (
    <>
      <div className="task">
        <div>
        <button onClick={()=>{setModal(!modal)}} className="btn_task_add" >new task</button>
        </div>
        <div className="task_list">
          {taskList.map((item: ITask) => {
            return (
              <div className="task_list__inner" key={item.id}>
                <div>
                  <h2 className={item.completed ? "task_completed" : ""}>{item.title}</h2>
                  <p className={item.completed ? "task_completed" : ""}>{item.body}</p>
                </div>
                <div className="task_list_btn">
                  <button 
                    className={`btn_task btn_complete_${item.completed}`} 
                    onClick={()=>{changeCompleted(item.id)}}>
                  </button>
                  <button 
                    onClick={() => {changeImportant(item.id)}}
                    className={`btn_task btn_important_${item.important}`}>
                  </button>
                  <button className="btn_task btn_remove"
                    onClick={() => {deleteTask(item.id)}}>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modal === true ? (
        <OpenTask setModal={setModal} setTaskList={setTaskList} taskList={taskList} />
      ) : (
        ""
      )}
    </>
  );
}
