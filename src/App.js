// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './fonts/Monstera-Regular.ttf';
import Banner from './Banner.jsx';
import base from './images/base_textoarriba.png';
import NubeIzq from './Nube_izq.jsx';
import NubeDer from './Nube_der.jsx';
import monstera from './images/transparencia_monstera.png'
import blur from './images/blur_cryptologo.png'
import logo from './images/cypto_logo.png'
import SocialMedia from './Social_media.jsx'
import Marquee from "react-fast-marquee";
import Modal from './Roadmap_modal.jsx';
import roadmap from './images/roadmap.png'

function App() {

  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <div className='Marquee-fixed'>
        <Marquee direction='left' speed='50' gradient={false} ><Banner /></Marquee>
      </div>
      <SocialMedia />
      <img src={base} className="Base" alt='base of banner' />
      <img src={blur} className="Blur" alt='blur of background' />
      <img src={logo} className="Logo" alt='logo' />
      <img src={monstera} className="Monstera" alt='monstera background' />
      <button className='button' onClick={() => setShow(true)}><img src={roadmap} className="Roadmap-logo" alt='Roadmap' /></button>
      <Modal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
