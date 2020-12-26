// import logo from './logo.svg';
import './App.css';
import Product from './Product.js'
import Todo from './homework-8/Todo.js';

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
const fruits = [
  {
    name: 'apple',
    price: '2$',
    desc: 'Aples from Armenia',
    icon: '🍏'
  },
  {
    name: 'banana',
    price: '2.2$',
    desc: 'Fresh bananas from from Ecuador',
    icon: '🍌'
  },
  {
    name: 'lemons',
    price: '3$',
    desc: 'Golden lemons',
    icon: '🍋'
  },
  {
    name: 'avocado',
    price: '4$',
    desc: 'Fresh avocados',
    icon: '🥑'
  },
];

function App() {

  const li = fruits.map((fruit, index)=>{
    return <li key={index}>
    <Product
      icon={fruit.icon}
      name={fruit.name}
      price={fruit.price}
      description={fruit.desc}
    />
  </li>    
  })

  return (
    <div>
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
      {/* <Product
        name="Bananas"
        price={`1$`}
        description="Fresh bananas from Ecuador"
      /> */}
      <ol>
        {li}
      </ol>

      <Todo />
    </div>
  );
}

export default App;
