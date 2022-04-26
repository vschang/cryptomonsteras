// import logo from './logo.svg';
import React from 'react';
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


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Marquee className='Marquee-sticky' direction='left' speed='50' gradient={false} >
          <Banner />
        </Marquee>
        <SocialMedia />
        <img src={base} className="Base" alt='base of banner' />
        <img src={blur} className="Blur" alt='blur of background' />
        <img src={logo} className="Logo" alt='logo' />
        <img src={monstera} className="Monstera" alt='monstera background' />
      </header>
    </div>
  );
}

export default App;
