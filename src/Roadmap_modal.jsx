import React, {useState} from 'react'
import './Roadmap_modal.css'
import roadmapIng from './images/roadmap-ing.png'
import roadmapEsp from './images/roadmap-esp.png'

const RoadmapModal = props => {
  // if (!props.show){
  //   return null
  // }

  const [showMapIng, setShowMapIng] = useState(true)
  const [showButton, setShowButton] = useState(true)

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-body'>
          {showMapIng ? <img src={roadmapIng} className="Roadmap-ing" alt='roadmap in english' />
          : <img src={roadmapEsp} className="Roadmap-ing" alt='roadmap en español' />}
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='close'>Close</button>
          <button onClick={() => [setShowMapIng(!showMapIng), setShowButton(!showButton)]} className='Espanol-btn close'>{showButton ? "Español" : "English"}</button>
        </div>
      </div>
    </div>
  );
}

export default RoadmapModal
