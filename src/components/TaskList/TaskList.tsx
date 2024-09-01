import { useEffect, useState } from "react";
import "./taskList.scss";
import { ITask } from "../../interface/interface";
import dataTask from "../../data/dataTask.json";
import OpenTask from "./OpenTask";
import { useDispatch, useSelector } from "react-redux";
import { changeCompleted, changeImportant, deleteTask } from "../../store/TaskSlice";

interface IProps {
  status: "today" | "important" | "completed"
}

export default function TaskList({ status }: IProps) {

  const getTasks = useSelector((state: {allTask: ITask[]}) => {return state.allTask})
  const dispath = useDispatch()


  console.log(getTasks)
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [modal, setModal] = useState(false)

  //фильтр списка по статусу
  useEffect(()=> {
    setTaskList([...getTasks])
    if(status !== "today") {
      return setTaskList(()=>{return dataTask.filter((task: ITask) => {
          if (task[status] === true) return true
          return false
        })})}
      
  }, [getTasks, status])


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
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
                <div className="task_list_btn">
                  <button 
                    className={`btn_task btn_complete_${item.completed}`} 
                    onClick={()=>{dispath(changeCompleted(item.id))}}>
                  </button>
                  <button 
                    onClick={() => {dispath(changeImportant(item.id))}}
                    className={`btn_task btn_important_${item.important}`}>
                  </button>
                  <button className="btn_task btn_remove"
                    onClick={() => {dispath(deleteTask(item.id))}}>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modal === true ? (
        <OpenTask setModal={setModal} />
      ) : (
        ""
      )}
    </>
  );
}
