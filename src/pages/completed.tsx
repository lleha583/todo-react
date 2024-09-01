import TaskList from "../components/TaskList/TaskList";

export default function Completed() {
    return (
        <section>
          <h1>Today</h1>
          <TaskList status={"complete"} />
        </section>
    )
}