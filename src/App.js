import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from "./components/Login"
import Home from './components/Home';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route  path='/' element={<Login/>} />
          <Route  path='/Home' element={<Home/>} />
          <Route  path='/detail/:id' element={<Detail/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
