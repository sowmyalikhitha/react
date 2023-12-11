import { useParams } from "react-router-dom";
import usefetch from "./usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = usefetch('http://localhost:8000/blogs/' + id);

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;