import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Nav from './compoments/Nav';
import Footer from './compoments/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav />
      <main className='md:px-10 mb-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
