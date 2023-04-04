import {useState, useEffect} from 'react';

function Counter() {
    const[number, setNumber] =useState(0);
    // const[name,setName]=useState("Büşra") ;
  
    useEffect(()=>{
      console.log("Number State güncellendi")
    }, [number]);
  
    // useEffect(()=>{
    //   console.log("Name State güncellendi")
    // }, [name]);
  
    useEffect(()=>{
      console.log('component mount edildi!!');
       
       const interval = setInterval(()=>{
         setNumber((n)=> n+1);
       }, 1000)

      return () => {
        console.log("component unmount edildi")
        clearInterval(interval)}
      ;


    }, []);
    return (
        <div >
         <h1>{number}</h1>
         <button onClick={ () =>{ setNumber(number+1)}}>Click</button>
          
    
          {/* <h1>{name}</h1>
          <button onClick={ () =>{ setName("Büş")}}>Click</button> */}
    
    
    
        </div>
      );
}

export default Counter;