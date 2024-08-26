import { useState } from "react";
import "./task.scss";
import { dataTask } from "../../data/dataTask";
import OpenTask from "./OpenTask";

export default function Task() {

  const [postList, setPostList] = useState([...dataTask]);
  const [modal, setModal] = useState(false);

  const deleteTask = (id: number) => {

    setPostList(postList.filter((task)=>{
     if (task.id == id) return false;
     return true; 
    }))
  }

  return (
    <>
      <div className="task">
        <div>
            <button className="btn_task" onClick={()=>{setModal(true)}}>new task</button>
        </div>
        <div className="task_list">
        {
            postList.map((item: any)=>{
                return (
                    <div className="task_list__inner" key={item.id}>
                        <h2>{item.title}</h2>
                        <div className="task_list_info">
                          <p>{item.body}</p>
                          <div className="task_list_btn">
                            <button onClick={()=>{deleteTask(item.id)}}>delete</button>
                          </div>
                        </div>
                    </div>
                )
            })
        }

        </div>
      </div>
        {
          (modal === true) ?  <OpenTask setModal={setModal} setPostList={setPostList} postList={postList} /> :  ''  
        }
    </>
  );
}
