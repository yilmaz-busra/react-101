// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import Header from './components/Header';
// componentsin function ismi buyuk baslasın

// const name =" Busra"
// const Surname ="Yilmaz"
// const isLoggedIn =true;

// function App(){
//   return(
//     <> 
//     {/* <h1>{name}{Surname}</h1> */}
//     {/* <h1>{` Benim adım ${name}, soyadım ${Surname}`}</h1> */}
//     {/* <h1>
//       { isLoggedIn && ` Benim adım ${name}, soyadım ${Surname}` }
//       { !isLoggedIn && 'giris yapmadiniz'}
      
//     </h1> */}
//     <h1> {isLoggedIn ? ` Benim adım ${name}, soyadım ${Surname}` : "Giris yapmadın"}</h1>
//     </>
//     // <div>         
//     //   <h1>Hello React</h1>
//     //   <Header/>
//     //   {/* children elementi varsa kullan <Header>dsklfjljdf</Header> */}
//     //  <p className="xyz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil enim, incidunt sed assumenda labore commodi voluptas rerum illo excepturi autem!  </p>
     
//     //  <label htmlfor="myinput">
//     //   Name
//     //   <input id="myinput" />
//     //  </label>
//     // </div>
//   );
// }
//    <div>    </div>=> return React.createElement("div",null, Hello) donusuyor arkada
// export default App;


import User from "./components/User";
// const friends=["huzo","tayfun","gokhan","bilal","ezgi","elif"];
const friends =[
  {
    id:1,
    name:"ezgi"
  },
  {
    id:2,
    name:"busra"
  },
  {
    id:3,
    name:"huzo"
  }
]
function App(){
  return (
    <>
    <User
     name="Busra" 
     surname="Yilmaz" 
     isLoggedIn={true} 
     age={29}
     friends={friends}
     />
    </>
  )
}

export default App;