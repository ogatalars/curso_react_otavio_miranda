import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

// //componente de função sem estado
// function App() {
//   // é um componente porque está em letra maiscula
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{1 + 2} Olá mundo</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//       <div> Elemento dentro do fragmento </div>
//     </>
//   );
// }

//componente de classe sem estado
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { nome: "Ogata", counter: 0 };
  }

  handleClick() {
    this.setState({ nome: "Felipe" });
  }
  handleAClick(event) {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
  render() {
    const { nome, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{1 + 2} Olá mundo</p>
          <p>
            {" "}
            {nome}
            {counter}
          </p>
          <p onClick={this.handleClick}> </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            This is the link
          </a>
        </header>
      </div>
    );
  }
}

// {} -> o que tiver dentro é lido como código
// podemos colocar dentro de um fragmento do react <> </> e ai conseguimos usar elementos que não necessariamente estão juntos
export default App;
