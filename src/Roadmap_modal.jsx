import React from 'react'
import './Roadmap_modal.css'

const RoadmapModal = props => {
  // if (!props.show){
  //   return null
  // }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>Roadmap</h1>
        </div>
        <div className='modal-body'>
          <p>Here is the roadmap</p>
        </div>
        <div className='modal-footer'>
          <button onClick={props.onClose} className='close'>Close</button>
        </div>
      </div>
    </div>
  );
}

export default RoadmapModal
