// import { useState, useEffect } from "react";
import Blog from "./blog";
import useFetch from "./usefetch";

const Home = () => {
  //    const [name, setName] = useState('mario');
  //    const [age,setAge] = useState(25);
  //     const handleclick = () => {
  //      setName('tom');
  //      setAge(30);
  //     }

  // const [blogs, setblogs] = useState(
  //   null //[
  //   //    {title:'my website', body:'lorem ipsum...', author: 'likhi', id: 1},
  //   //    {title:'welcome party', body:'lorem ipsum...', author: 'bhavani', id: 2},
  //   //    {title:'web tools', body:'lorem ipsum...', author: 'siri', id: 3}
  //   // ]
  // );

  // const [isPending, setisPending] = useState(true);
  // const [error, setError] = useState(null);
  // const [name, setname] = useState("likhitha");

  // const handleDelete = (id) => {
  //     const newblogs = blogs.filter(blog => blog.id !== id);
  //     setblogs(newblogs);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         // console.log(res);
  //         if(!res.ok){
  //           throw Error("COULD NOT FETCH THE DATA FOR THAT RESOURCE");
  //         }
  //         return res.json(); //this passes the data into js obj.
  //       })
  //       .then((data) => {
  //         setisPending(false);
  //         setblogs(data);
  //         setError(null);
  //       })
  //       .catch(err => {
  //         setisPending(false);
  //         setError(err.message);
  //       });
  //   }, 1000);
  // }, []);
const { data, isPending, error} = useFetch('http://localhost:8000/blogs')

return (
    <>
      <div className="home">
        {/* {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
            </div>
           ))}  */}
        {error  && <div>{ error }</div>}
        {isPending && <div>LOADING........</div>}
        {data && <Blog blogs={data} title="All Blogs" />}
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
