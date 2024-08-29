import Task from "../components/Task/Task";

export default function Today() {
    return (
        <section>
          <h1>Today</h1>
          <Task important={false} />
        </section>
    )
}