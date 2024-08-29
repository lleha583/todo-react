import "./sidebar.scss";
import sidebar from "../assets/icons/sidebar.svg";
import { useState } from "react";
import iconToday from "../assets/icons/icon_today.svg";
import iconImportant from "../assets/icons/icon_important.svg";
import iconCompleted from "../assets/icons/icon_completed.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [openSide, setOpenSide] = useState(false);

  return (
    <>
      <div className={openSide ? "sidebar" : "sidebar open"}>
        <div className="sidebar_btn">
          <img
            onClick={() => {
              setOpenSide(!openSide);
            }}
            src={sidebar}
            alt=""
          />
        </div>
        <div className="navigation">
          <nav>
            <Link onClick={()=>{setOpenSide(false)}} className="sidebar_link" to={"today"}>
              <img src={iconToday} alt="" />
              <h3>today</h3>
            </Link>

            <Link onClick={()=>{setOpenSide(false)}} className="sidebar_link" to={"important"}>
              <img src={iconImportant} alt="" />
              <h3>important</h3>
            </Link>
            <a onClick={()=>{setOpenSide(false)}} className="sidebar_link" href="">
              <img src={iconCompleted} alt="" />
              <h3>completed</h3>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
