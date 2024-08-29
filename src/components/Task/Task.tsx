import { useEffect, useState } from "react";
import "./task.scss";
import { dataTask } from "../../data/dataTask";
import OpenTask from "./OpenTask";
import useDelete from "../../hooks/useDelete";

interface IProps {
  important: boolean
}

export default function Task({ important }: IProps) {
  
  const [postList, setPostList] = useState([...dataTask]);
  const [modal, setModal] = useState(false);

  const deleteTask = (id: number) => { return setPostList(useDelete(postList, id))};

  //сделать задачу важным
  const changeImportant = (id: number) => {
    setPostList(postList.filter((task)=> {
      if(task.id == id) task.important = !task.important
      return true
    }))
  }

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
