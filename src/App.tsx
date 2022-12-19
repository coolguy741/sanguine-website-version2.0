import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Work from './pages/Work'; 
import About from './pages/About';
import Services from './pages/Services';
import PornBrain from './pages/PornBrain';
import FutureOfSurgery from './pages/FutureOfSurgery';
import SpotLeukaemia from './pages/SpotLeukaemia';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {<Home/>} />
        <Route path="/work" element = {<Work/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/services" element = {<Services/>} />
        <Route path="/work/pornbrain" element = {<PornBrain/>} />
        <Route path="/work/futureofsurgery" element = {<FutureOfSurgery/>} />
        <Route path="/work/spotleukaemia" element = {<SpotLeukaemia/>} />
      </Route>
    </Routes>
  );
}

function Layout(){
  return (
    <>
      <Navbar/>
      <div className='top-0 left-0 -z-10'>
        <Outlet />
      </div>
    </>
  );
}
export default App;
