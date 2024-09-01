import { useEffect, useState } from "react";
import "./taskList.scss";
import { ITask } from "../../interface/interface";
import { dataTask } from "../../data/dataTask";
import OpenTask from "./OpenTask";

interface IProps {
  status: "today" | "important" | "completed"
}

export default function TaskList({ status }: IProps) {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [modal, setModal] = useState()

  //фильтр списка по статусу
  useEffect(()=> {
    if(status !== "today") {
      return setTaskList(()=>{return dataTask.filter((task: ITask) => {
          if (task[status] === true) return true
          return false
        })})}
      setTaskList([...dataTask])
  }, [status])

  //удалить задачу     not working
  const deleteTask = (id: number) => {
    let TaskList = (() => {
      return taskList.filter((task: ITask) => {
        if (task.id == id) return false;
      return true;
      })
    })
  };

  //сделать задачу важным       not working
  const changeImportant = (id: number) => {
    setTaskList(()=>{return taskList.filter((task: any) => {
      if(task.id == id) task.important = !task.important
      return true
    })})
  };

  //выполнить        not working
  const changeComplete = (id: number) => {
    setTaskList(()=>{return taskList.filter((task: any) => {
      if(task.id == id) task.important = !task.important
      return true
    })})
  };

  return (
    <>
      <div className="task">
        <div>
        </div>
        <div className="task_list">
          {taskList.map((item: ITask) => {
            return (
              <div className="task_list__inner" key={item.id}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
                <div className="task_list_btn">
                  <button 
                    className={`btn_task btn_complete_${item.completed}`} 
                    onClick={()=>{changeComplete(item.id)}}>
                  </button>
                  <button 
                    onClick={() => {changeImportant(item.id)}} 
                    className={`btn_task btn_important_${item.important}`}>
                  </button>
                  <button className="btn_task btn_remove"
                    onClick={() => { deleteTask(item.id);}}>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modal === true ? (
        <OpenTask setModal={setModal} setTaskList={setTaskList} postList={taskList} />
      ) : (
        ""
      )}
    </>
  );
}
