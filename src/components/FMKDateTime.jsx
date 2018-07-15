import React from 'react';
import '../css/mycssinput.css';
import { getDateString } from '../api/datefuncs.js';

// const MyCSSInput = ( props ) => {
class FMKDateTime extends React.Component {

  constructor(props) {
    super();
    this.state = {
        // info: '',
        inputStyle: {
          color: 'tomato'
        }

    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleBlur= this.handleBlur.bind(this);
  }

  setFocusTxtColor = (e) => {
    console.log("Focus - Changing color...");
    console.log("Value:", e.target.value);

    this.setState({
      inputStyle: { color: 'blue' }
      // class: 'focus'
    });
  }

  setBlurTxtColor = (e) => {
    console.log("Blur - Changing color...");
    console.log("Value:", e.target.value);
    var color = 'tomato';
    if (e.target.value === '') {
      color = 'tomato'
    }
    else color = 'blue';

    this.setState({
      inputStyle: { color: color }
      // class: 'focus'
    });
  }

  render () {
    // getMinDate();
    var {name, onChange, onBlur, value, placeholder, title, color, touched} = this.props;

    console.log("Touched:", touched);
    var inputStyle = {
      // color: color || 'tomato',
      color: color || this.state.inputStyle.color
    };

/*
    <div className='group'>
      <input type='text' style={inputStyle} className={validateClass()} onFocus={() => this.handleFocus('info')} onChange={this.handleChange} onBlur={this.handleBlur} value={val}/>
      <span className='bar'></span>
      <label>Title</label>
    </div>

    {/* style={inputStyle}
    onBlur={onBlur}
    onFocus={this.setFocusTxtColor}
*/
    return (
      <div className='group'>
        <input

          type="date"
          id='expiryDate'
          style={inputStyle}

          name={name}
          onChange={onChange}
          onFocus={this.setFocusTxtColor}
          onBlur={this.setBlurTxtColor}
          value={value}

          min={getDateString(new Date())}

        />
        <span className='bar'></span>
        <label>{title || 'Title'}</label>
      </div>
    )

  }


}

export default FMKDateTime;
