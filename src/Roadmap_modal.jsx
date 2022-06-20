import React from 'react'
import './Roadmap_modal.css'
import roadmapIng from './images/roadmap_ing.png'

const RoadmapModal = props => {
  // if (!props.show){
  //   return null
  // }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        {/* <div className='modal-header'>
        </div> */}
        <div className='modal-body'>
          <img src={roadmapIng} className="Roadmap-ing" alt='roadmap in english' />
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='close'>Close</button>
        </div>
      </div>
    </div>
  );
}

export default RoadmapModal
