import React from 'react';
import '../css/mycssinput.css';

// const MyCSSInput = ( props ) => {
class MyCSSInput extends React.Component {

  constructor() {
    super();
    this.state = {
        // info: '',
        touched: {
          info: false
        },
        inputValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur= this.handleBlur.bind(this);
  }
    // ...
    // = () => {
  handleFocus = (field) => {
    // if (this.state.inputValue === '') {
    //   this.setState({
    //     touched: { ...this.state.touched, [field]: false },
    //   });
    //   console.log("Entry field UNtouched...");
    // }
    // else {
      this.setState({
        touched: { ...this.state.touched, [field]: true },
      });
    //   console.log("Entry field touched...");
    // }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: false },
    });
    console.log("Entry field untouched...");
  }

  handleChange (evt) {
    // evt.preventDefault();
    this.setState( {
      inputValue: evt.target.value
    });
    // console.log("inputValue:", this.state.inputValue);
    // this.handleFocus('info');
  }

  // shouldMarkError = (field) => {
  //   const hasError = errors[field];
  //   const shouldShow = this.state.touched[field];
  //   return hasError ? shouldShow : false;
  // };
      // ...
  //     <input
  //       className={shouldMarkError('email') ? "error" : ""}
  //       onBlur={this.handleBlur('email')}
  //       type="text"
  //       placeholder="Enter email"
  //       value={this.state.email}
  //       onChange={this.handleEmailChange}
  //     />
  //   }
  // }

  render () {

    var inputStyle = {
      color: 'blue',
    };

    var validate = () => {
      // true means invalid, so our conditions got reversed
      console.log("this.state.inputValue:", this.state.inputValue);
      console.log("this.state.touched.info:", this.state.touched.info);
      if ((this.state.inputValue === '') || (this.state.touched.info === false)) {
        return '';
      }
      if ((this.state.inputValue !== '') && (this.state.touched.info === true)) {
        return 'complete';
      }
      if ((this.state.inputValue === '') && (this.state.touched.info === true)) {
        return 'used';
      }
      // else {
      //   return 'used';
      // }
      // return {
      //   touched: email.length === 0,
      //   info: password.length === 0,
      // };
    }

    //className={this.state.touched.info ? "used" : ""}

    return (
      <div className='group'>
        <input type='text' style={inputStyle} className={validate()} onFocus={() => this.handleFocus('info')} onChange={this.handleChange} onBlur={this.handleBlur}/>
        {/*}<span className='highlight'></span> */}
        <span className='bar'></span>
        <label>Title</label>
      </div>
    )
  }

}

export default MyCSSInput;
