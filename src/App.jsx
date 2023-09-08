import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';


function App() {
  function handleClick(){
    alert('button is clicked');
  }

  const arrowFunction = (num) =>{
    alert(num+5);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Clicked Hare</button>
      <button onClick={() => {alert('anonimus funciton are clicked')}}>Clicked Hare</button>
      <button onClick={() =>{arrowFunction(15)}}>Add Click</button>
    </>
  )
}

export default App
