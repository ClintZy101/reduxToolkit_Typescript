
import BasicExample from './components/Accordion';

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
      esdfsd
      <BasicExample />
    </div>
  );
}

export default App;
