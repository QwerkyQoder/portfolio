
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout'

import './App.scss';
import Portfolio from '../../portfolio-project/src/components/Portfolio';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} ></Route>
        <Route path='about' element={<About/>} ></Route>
        <Route path='contact' element={<Contact></Contact>} ></Route>
        <Route path='portfolio' element={<Portfolio/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
