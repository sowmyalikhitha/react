import { useState, useEffect } from "react";
import Blog from "./blog";

const Home = () => {
  //    const [name, setName] = useState('mario');
  //    const [age,setAge] = useState(25);
  //     const handleclick = () => {
  //      setName('tom');
  //      setAge(30);
  //     }

  const [blogs, setblogs] = useState(
    null //[
    //    {title:'my website', body:'lorem ipsum...', author: 'likhi', id: 1},
    //    {title:'welcome party', body:'lorem ipsum...', author: 'bhavani', id: 2},
    //    {title:'web tools', body:'lorem ipsum...', author: 'siri', id: 3}
    // ]
  );

  const [isPending, setisPending] = useState(true);

  // const [name, setname] = useState("likhitha");

  // const handleDelete = (id) => {
  //     const newblogs = blogs.filter(blog => blog.id !== id);
  //     setblogs(newblogs);
  // }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json(); //this passes the data into js obj.
        })
        .then((data) => {
          setblogs(data);
          setisPending(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 1000);
  }, []);

  return (
    <>
      <div className="home">
        {/* {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
           ))}  */}
        {isPending && <div>LOADING........</div>}
        {blogs && <Blog blogs={blogs} title="All Blogs" />}
        {/* <p>{name}</p><br></br>
           <button onClick={()=>setname("bhavani")}>Change Name</button>
           <Blog blogs={blogs.filter((blog) => blog.author === 'bhavani')} title="Bhavani's Blogs"/> */}
      </div>
      {/* <h2>Home</h2>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={handleclick}>Click me</button> */}
    </>
  );
};

export default Home;
