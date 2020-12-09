import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* This is a prop that handles the HomePage route */}
        <Route path="/" component={HomePage} exact />
      </div>
    </Router>
  );
}

export default App;
