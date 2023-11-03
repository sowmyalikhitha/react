import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('mario');
   const [age,setAge] = useState(25);
    const handleclick = () => {
     setName('tom');
     setAge(30);
    }

    return ( 
        <>
        <h2>Home</h2>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={handleclick}>Click me</button>
        </>
     );
}
 
export default Home;