import "./App.css";
import A from "./Components/A";
import B from "./Components/B";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div style={{ color: "red", backgroundColor: " white", padding: 45 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          inventore, minima vero blanditiis, sunt maxime qui illum provident
          itaque ipsa iste? Tempore totam expedita suscipit obcaecati explicabo,
          nisi, natus in magni ullam, ad asperiores similique sit? Ipsam iste
          laborum vero eum omnis reiciendis distinctio et hic eaque, molestiae
          nobis veniam nulla dolore aliquid, doloremque, dicta recusandae ipsum
          consequatur qui? Error, non assumenda! Voluptatem tempore enim
          inventore.
        </div>
        <div class="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div> */}

        <A />
        <B />
      </header>
    </div>
  );
}

export default App;
