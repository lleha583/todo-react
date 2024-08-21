import { useRef } from "react";

function NewPost(props: any) {

  const [posts, setPosts] = [props.post, props.setPost];

  const titleRef = useRef<any>();
  const bodyRef = useRef<any>();

  const addPost = () => {
    const title = titleRef.current.value;
    const body = bodyRef.current.value
    setPosts([{ title: title, body: body }, ...posts]);
  };

  return (
    <div className="new_post">
      <p>title:</p>
      <input
        ref={titleRef}
        type="text"
        placeholder="title"
      />
      <p>body:</p>
      <input
        ref={bodyRef}
        type="text"
        placeholder="body"
      />
      <button type="submit" onClick={addPost}>Add</button>
    </div>
  );
}

export default NewPost;
