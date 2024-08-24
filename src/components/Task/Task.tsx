import { useState } from "react";
import "./task.css";
import { dataTask } from "../../data/dataTask";
import NewTask from "./NewTask";

export default function Task() {
  console.log('fullReturn')
  const [postList, setPostList] = useState([...dataTask]);
  const [modal, setModal] = useState(false);

  console.log(setPostList)

  return (
    <>
      <div className="task">
        <div>
            <button onClick={()=>{setModal(true)}}>new task</button>
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
          (modal === true) ?  <NewTask setModal={setModal} setPostList={setPostList} postList={postList} /> :  ''  

        }
    </>
  );
}
