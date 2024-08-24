import { useState } from "react";
import Modal from "../Modal/Modal";

export default function NewTask({setModal, setPostList, postList}: any) {
    console.log('onlyModal')
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createNewTask = () => {
    setPostList([{ 
        body: body,
        title: title,
        id: postList.length + 1,
      }, ...postList]),
      setModal(false)
  };

  return (
    <>
      <Modal status={setModal}>
        <div onClick={(e) => {e.stopPropagation();}}>
          <h1>title</h1>
          <input onChange={(e) => {setTitle(e.target.value); }} value={title} className="modal_title" type="text" placeholder="title" />
          <p>body</p>
          <textarea onChange={(e) => {setBody(e.target.value); }} value={body}  className="modal_body"></textarea>
          <button onClick={createNewTask}>add</button>
        </div>
      </Modal>
    </>
  );
}
