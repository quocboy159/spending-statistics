import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Nav from './compoments/Nav';
import Footer from './compoments/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Routers from './Routers';
import AuthenticatedLayout from './layouts/ProtectedLayout';
import UnProtectedLayout from './layouts/UnProtectedLayout';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className='md:px-10 mb-auto'>
        <Routes>
        <Route path="/" element={<AuthenticatedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route element={<UnProtectedLayout />}>
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path='*' element={
            <main>
              <p>There's nothing here!</p>
            </main>
          } />
        </Route>
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
