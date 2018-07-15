import React from 'react';
import '../css/mycssinput.css';

// const MyCSSInput = ( props ) => {
class TestInput extends React.Component {



  render () {

    var {name, onChange, onBlur, value, placeholder, title, color} = this.props;

    var inputStyle = {
      color: color || 'blue',
    };
/*
    <div className='group'>
      <input type='text' style={inputStyle} className={validateClass()} onFocus={() => this.handleFocus('info')} onChange={this.handleChange} onBlur={this.handleBlur} value={val}/>
      <span className='bar'></span>
      <label>Title</label>
    </div>

*/
    return (
      <div className='group'>
        <input

          type="textarea"
          name={name}
          style={inputStyle}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}

        />
        <span className='bar'></span>
        <label>{title || 'Title'}</label>
      </div>
    )

  }


}

export default TestInput;
