import { useState } from "react";
import "./task.css";
import { dataTask } from "../../data/dataTask";
import Modal from "../Modal/Modal";

export default function Task() {

  const [postList, setPostList] = useState([...dataTask]);
  const [newTask, setNewTask] = useState(false)

  return (
    <>
      <div className="task">
        <div>
            <button onClick={()=>{setNewTask(true)}}>new task</button>
        </div>
        <div className="task_list">
        {
            postList.map((item: any)=>{
                return (
                    <div className="task_list__inner"  key={item.id}>
                        <h2>{item.body}</h2>
                        <div className="task_list_info">
                        <p>{item.title}</p>
                        </div>

                    </div>
                )
            })
        }
        </div>
      </div>
        {
            (newTask === true) ?       
            <Modal status={setNewTask}>
                    <div>
                        <h1>title</h1>
                        <input className="modal_title" type="text" />
                        <p>body</p>
                        <textarea className="modal_body"></textarea>
                    </div>
          </Modal> : ''
        }
    </>
  );
}
