import Counter from './component/Counter';
import { useState } from 'react';

function App() {
  const[isVisible, setIsVisible] = useState(true);
   
  return(
    <div className="App"> 
     {isVisible && <Counter/>}

     <button onClick={ ()=> setIsVisible(!isVisible)}>Toogle Counter</button>
   </div>
  )



 
}

export default App;
