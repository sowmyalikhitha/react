const Home = () => {

    const handleclick = (e) => {
        console.log("Hello",e);
    }

    return ( 
        <>
        <h2>Home</h2>
        <button onClick={handleclick}>Click me</button>
        
        </>
     );
}
 
export default Home;