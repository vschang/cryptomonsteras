import React from 'react'
import './Banner.css'
// import {motion} from 'framer-motion/dist/framer-motion'
// import textoArriba from './images/texto_arriba.png';

// Using Marquee
const Banner = () => {
return (
        // <img src={textoArriba} className="Texto-arriba" alt='banner text' />
        <p className='Banner-text'>¡Our Collection Wants to Save the Cloudforest!</p>
       );
}

// USING framer motion //
// const Banner = () => {
//   return (<motion.div className='Text-div'
//             animate={{ x: '-2200px' }}
//             transition={{ duration: 10,
//                           // repeatType: "loop",
//                           repeatDelay: 0,
//                           repeat: Infinity
//                           }}>
//             <img src={textoArriba} className="Texto-arriba" alt='banner text' />
//           </motion.div>
//         );
//   }

export default Banner;
