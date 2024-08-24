import { createPortal } from "react-dom";
import "./modal.css";

export default function Modal({ children, status }: any) {
  const modalElement = document.getElementById("modal") as HTMLDivElement;

  return createPortal((
    <div onClick={()=> {status(false)}} className="modal_background">
      <div className="modal_content">{children}</div>
    </div>
    ),modalElement
  );
}
