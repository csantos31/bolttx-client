import './App.css';
import Login from './pages/Login/Login';
import Registration from './pages/Register/Register';
import { Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
