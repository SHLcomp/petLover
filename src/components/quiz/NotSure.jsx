import React from 'react'
import "./NotSure.scss"

const NotSure = () => {
  return (
    <div className='notSure line' id='quiz'>
        <div className="txt">
          <span className="note">Quiz</span>
          <h1>Which Pet is My Perfect Pet?</h1>
          <h4>Are you looking to adopt a pet but don't know which pet is a good fit for you?</h4>
          <h4>Here we aim to let you decide which pet is a good fit for you. Take the interactive quiz bellow</h4>
          <p>Don't waste your energy on a pet that is not a good fit for you, remember to do your research before bringing a soul into your place.</p>
          <p>Try to pick a pet that suits your lifestyle and budget.</p>
          <div className="ctas">
            <h3 className="cta">Take quiz</h3>
            <h3 className='cta2'>I already know my pet</h3>
          </div>
        </div>
        <div className="img-cont">
          <img src="https://images.pexels.com/photos/212286/pexels-photo-212286.jpeg" alt="" />
        </div>
    </div>
  )
}

export default NotSure