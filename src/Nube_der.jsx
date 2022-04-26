import React from 'react'
import './Nube_der.css'
import nubeDer from './images/nube_izq.png';
import aroid from './images/aroid.png';
import nubeAroid from './images/nube_aroid.png';

const NubeDer = () => {
  return(
    <div>
      <img src={nubeDer} className="Nube-der" alt='nube der' />
      <img src={nubeAroid} className="Nube-aroid" alt='nube aroid' />
    <a href="https://reactjs.org">
      <img src={aroid} className="Aroid-icon" alt='link to Aroid market' />
    </a>
    </div>
  );
}

export default NubeDer
