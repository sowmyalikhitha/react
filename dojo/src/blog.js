// import { useState } from "react";

const Blog = ({ blogs, title, handleDelete }) => {
  // const blogs = props.blogs;
  // const title = props.title;
  // const [blogs,setblogs] = useState([
  //     {title:'my website', body:'lorem ipsum...', author: 'likhi', id: 1},
  //     {title:'welcome party', body:'lorem ipsum...', author: 'bhavani', id: 2},
  //     {title:'web tools', body:'lorem ipsum...', author: 'siri', id: 3}
  //  ])

  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default Blog;
