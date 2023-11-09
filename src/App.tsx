import Counter from "./components/Counter";



// Store
interface CounterState {
  value: number;
}
interface UserState {
  isSignedIn: boolean;
}

// Actions
const incrementByAmount = {type: 'INCREMENT', payload: 10}
const decrement = {type: 'DECREMENT'}

// Reducers


function App() {

  return (
    <div >
      <Counter />

    </div>
  );
}

export default App;
