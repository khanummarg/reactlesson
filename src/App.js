// import logo from './logo.svg';
import './App.css';
import Product from './Product.js'

function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}

function User(props) {
  // console.log('props', props);
  return (
    <h2>My name is {props.name} and I am {props.age}.</h2>
  )
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Greeting name="John" />
      <Greeting name="Helen" />
      <User
        name="Michael"
        age={35}
      />
      <Product
        name="Bananas"
        price={`1$`}
        description="Fresh bananas from Ecuador"
      />
    </div>
  );
}

export default App;
