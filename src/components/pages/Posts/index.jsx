import { Link, useLoaderData } from "react-router-dom";

export default function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts page</h1>

      <ol>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
