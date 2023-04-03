import { useState } from 'react';
// useState herhangi bir companentsin anlık değişimini saglar
//herhangi bir state güncellendigi anda render islemi bastan yapilir
function App() {
    const[name, setName]= useState("busra");
    const[age, setAge]= useState(24);
    console.log(age,name);
    const[friends, setFriends]=useState(["Huzo", "Ezgi"]);
    const[address, setAddress] = useState({title:"İstanbul", zip:4444} );

 return(
     <div className="App">
        <h1>Hello {name}</h1>
        <h2>Age: {age} </h2>
        <button onClick={() =>setName("kayra")}>Change name</button>
        <button onClick={ ()=>setAge(10)}  >Change age</button>

        <hr />
      <br />

        <h2>Friends </h2>
        {
            friends.map((friend,index) => ( 
                <div key={index}>{friend}</div>  ))
         }
        <br />
        
        <button onClick={()=> setFriends([...friends, "ayse"])}>Add friend</button>
        {/* arrayi koruyorak yazmak icin */}

        <hr />
        <br /><br />
        <h2>Address</h2>
        <div>
            {address.title} {address.zip}

            <br />
            <button onClick={()=>setAddress({...address  , title:"İzmir", zip:5555 })}>Chaange Address</button>
        </div>
     </div> 

 )
    
    
 
  
}

export default App;
