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
    <div>
      <h1>Hello</h1>
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
    </div>
  );
}

function Layout(){
  return (
    <>
      <Navbar/>
      <hr/>
      <Outlet />
    </>
  );
}
export default App;
