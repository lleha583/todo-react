import Task from "../components/Task/Task";

export default function Important() {
  return (
    <>
      <section>
        <h1>important</h1>
        <Task important={true} />
      </section>
    </>
  );
}
