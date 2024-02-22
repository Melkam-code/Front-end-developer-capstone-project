import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Newpage } from './components/newpage';

import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='newpage' element={<Newpage />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
