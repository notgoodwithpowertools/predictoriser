import React from 'react';
import Image from './Image.jsx';
import '../css/MatButtonCircle.css';
import addCross from '../images/add-cross.png';

const MatButtonCircle = (props) => {

  // var { src, text } = props;

  return (
    <div>
      <label class="circle" for="toogle">
        <div className="circleImg">
          <img src={addCross} />
        </div>
      </label>
      
      <div class='container'>
        <div class="btn-round"><span>+</span></div>
      </div>
  </div>

);

};

export default MatButtonCircle;
