import { useState } from "react";
import Modal from "../Modal/Modal";
import './task.scss'

export default function OpenTask({ setModal, setPostList, postList }: any) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [important, setImportant] = useState(false);
  const [complete, setComplete] = useState(false)

  const createNewTask = () => {
    setPostList([
      {
        body: body,
        title: title,
        important: false,
        complete: false,
        id: postList.length + 1,
      },
      ...postList,
    ]),
      setModal(false);
  };

  return (
    <>
      <Modal status={setModal}>
        <div onClick={(e) => { e.stopPropagation(); }}>

          <h1>title</h1>
          <div className="modal_task" >

            <div className="modal_task_text">

              <input onChange={(e) => { setTitle(e.target.value); }}
                value={title}
                className="modal_title"
                type="text"
                placeholder="title"
              />
              <p>body</p>
              <textarea
                onChange={(e) => { setBody(e.target.value) }} value={body} className="modal_body"></textarea>
            </div>
            <div className="modal_task_setting">
              <button 
                className={`btn_task btn_important_${important}`}
                onClick={() => {setImportant(!important)}}>
              </button>
              <button 
                className={`btn_task btn_complete_${complete}`} 
                onClick={()=>{setComplete(!complete)}}>
              </button>
            </div>
          </div>
        </div>
        <button className="btn_task_add" onClick={createNewTask}>add</button>
      </Modal>
    </>
  );
}
