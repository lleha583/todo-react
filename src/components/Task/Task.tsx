import { useState } from "react";
import "./task.scss";
import { dataTask } from "../../data/dataTask";
import OpenTask from "./OpenTask";
import useDelete from "../../hooks/useDelete";

export default function Task() {
  
  const [postList, setPostList] = useState([...dataTask]);
  const [modal, setModal] = useState(false);

  const deleteTask = (id: number) => {setPostList(useDelete(postList, id))};

  const changeImportant = (id: number) => {
    setPostList(postList.filter((task)=> {
      if(task.id == id) task.important = !task.important
      return true
    }))
  }

  return (
    <>
      <div className="task">
        <div>
          <button className="btn_task" onClick={() => {setModal(true);}}>Add new task</button>
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
                    onClick={() => {changeImportant(item.id)}} 
                    className={item.important ? 'important' : 'important_false'}>
                    </button>
                  <button 
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
