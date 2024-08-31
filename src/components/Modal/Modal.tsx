import { createPortal } from "react-dom";
import "./modal.scss";

export default function Modal({ children, status }: {children: React.ReactNode, status: any}) {
  const modalElement = document.getElementById("modal") as HTMLDivElement;

  return createPortal((
    <div onClick={()=>{status(false)}} className="modal_background">
      <div className="modal_content">{children}</div>
        <button className="modal_exit">X</button>
    </div>
    ),modalElement
  );
}
