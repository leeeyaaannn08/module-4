import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Footer from './Components/Footer'
import Login from './Pages/Auth/Login'

//mo
function App() {
  return (
    <div className="App">
      <nav>
        <Link class="nvunder" to='/'>Books</Link>
        <Link class="nvunder" to='/about'>Goals</Link>
        <Link class="nvunder" to='/profile'>Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
