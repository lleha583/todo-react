import TaskList from "../components/TaskList/TaskList";

export default function Important() {
  return (
    <>
      <section>
        <h1>important</h1>
        <TaskList status={"important"} />
      </section>
    </>
  );
}
