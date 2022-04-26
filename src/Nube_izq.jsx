import React from 'react'
import './Nube_izq.css'
import nubeIzq from './images/nube_izq.png';
import buyNowIcon from './images/buy_now.png';
import nubeBuyNow from './images/nube_bn.png';

const NubeIzq = () => {
  return(
    <div>
      <img src={nubeIzq} className="Nube-izq" alt='nube izq' />
      <img src={nubeBuyNow} className="Nube-buy" alt='nube buy now' />
    <a href="https://reactjs.org">
      <img src={buyNowIcon} className="Buy-now-icon" alt='link to NFT market' />
    </a>
    </div>
  );
}

export default NubeIzq
