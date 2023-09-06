import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import index from './pages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' Component={index}/>
      </Routes>
    </div>
  );
}
export default App;
