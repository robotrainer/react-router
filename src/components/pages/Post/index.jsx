import { useLoaderData } from "react-router-dom";

export default function Post() {
  const post = useLoaderData();

  return (
    <div>
      <h1>Post page</h1>

      <section>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </section>
    </div>
  );
}
