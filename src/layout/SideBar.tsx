import "./sidebar.scss";
import sidebar from "../assets/icons/sidebar.svg";
import { useState } from "react";
import iconToday from "../assets/icons/icon_today.svg";
import iconImportant from "../assets/icons/icon_important.svg";
import iconCompleted from "../assets/icons/icon_completed.svg";

export default function SideBar() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <div className={openSide ? 'sidebar open' : 'sidebar'} >
        <div className="sidebar_btn">
          <img onClick={() => {setOpenSide(!openSide)}} src={sidebar} alt="" />
        </div>
        <div className="navigation">
          <nav>
            <div>
              <img src={iconToday} alt="" />
              <a href="">today</a>
            </div>
            <div>
              <img src={iconImportant} alt="" />
              <a href="">important</a>
            </div>
            <div>
              <img src={iconCompleted} alt="" />
              <a href="">completed</a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
