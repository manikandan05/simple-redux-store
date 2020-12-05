import './App.css';
import Container from './Components/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './Components/Reducer';


function App() {
  const store = createStore(userReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
