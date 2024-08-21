import { useState } from "react";
import "./posts.css";
import NewPost from "./NewPost";

export default function Posts() {
  const [posts, setPosts] = useState<any>([
    { title: "title", body: "body" },
    { title: "asd", body: "asdfasdfsdf" },
  ]);

  const [search, setSearch] = useState("");

  const filter = () => {
    return posts.filter((item: any) => {
      return !item.title.indexOf(search);
    });
  };

  console.log(filter());
  return (
    <section className="posts">
      <h1>Posts</h1>
      <NewPost post={posts} setPost={setPosts} />
      <div className="search">
        <h2>Search</h2>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
      </div>
      <div className="posts_list">
        {filter().map((item: any) => {
          return (
            <div className="posts_list__inner">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
