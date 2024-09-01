import { useState } from "react";
import SideBarTasks from "../../components/SideBarTasks/SideBarTasks";
import TaskList from "../../components/TaskList/TaskList";
import './Tasks.scss'


export default function Tasks() {

  const [status, setStatus] = useState<"today" | "important" | "completed">("today");

    return (
        <section className="tasks">
          <TaskList status={status} />
          <SideBarTasks setStatus={setStatus} />

        </section>
    )
} 