import { useEffect, useState } from "react";
import "./task.scss";
import { dataTask } from "../../data/dataTask";
import OpenTask from "./OpenTask";
import { ITask } from "../../interface/interface";

interface IProps {
  important: boolean
}

export default function Task({ important }: IProps) {
  
  const [postList, setPostList] = useState<ITask[]>([...dataTask]);
  const [modal, setModal] = useState<boolean>(false);


  //удалить задачу
  const deleteTask = (id: number) => {
    setPostList(()=> {
      return postList.filter((task: ITask) => {
        if (task.id == id) return false;
      return true;
      })
    })
  };

  //сделать задачу важным
  const changeImportant = (id: number) => {
    setPostList(postList.filter((task)=> {
      if(task.id == id) task.important = !task.important
      return true
    }))
  };

  //выполнить
  const changeComplete = (id: number) => {
    setPostList(postList.filter((task)=> {
      if(task.id == id) task.complete = !task.complete
      return true
    }))
  };

  //список важных дел
  useEffect(()=> {
    if(important === true) {
      setPostList(()=> {return postList.filter((post: any)=> {
      if (post.important === true) return true
      return false
    })})}
  }, [])

  return (
    <>
      <div className="task">
        <div>
          <button className="btn_task_add" onClick={() => {setModal(true);}}>Add new task</button>
        </div>
        <div className="task_list">
          {postList.map((item: any) => {
            return (
              <div className="task_list__inner" key={item.id}>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
                <div className="task_list_btn">
                  <button 
                    className={`btn_task btn_complete_${item.complete}`} 
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
        <OpenTask setModal={setModal} setPostList={setPostList} postList={postList} />
      ) : (
        ""
      )}
    </>
  );
}
