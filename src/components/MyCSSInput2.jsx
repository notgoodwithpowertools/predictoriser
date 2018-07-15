import React from 'react';
import '../css/mycssinput.css';

// const MyCSSInput = ( props ) => {
class MyCSSInput extends React.Component {

  constructor(props) {
    super();
    this.state = {
        // info: '',
        touched: {
          info: false
        },
        inputValue: '',
        class: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.props.handleChange;
    this.handleBlur = this.handleBlur.bind(this);
    this.value = this.props.value;
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
        class: 'focus'
      });
    //   console.log("Entry field touched...");
    // }
  }

  // handleBlur = (field) => (evt) => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: false },
  //     class: 'blur'
  //   });
  //   console.log("Blur...");
  // }

  handleBlur (field) {
    this.setState({
      touched: { ...this.state.touched, [field]: false },
      class: 'blur'
    });
    console.log("Blur...");
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

    const val = this.props.value;

    var inputStyle = {
      color: 'black',
    };

    var validateClass = () => {
      // true means invalid, so our conditions got reversed
      // console.log("this.state.inputValue:", this.state.inputValue);
      // console.log("this.state.touched.info:", this.state.touched.info);
      // console.log("this.state.class:", this.state.class);
      if ((this.state.inputValue === '') || (this.state.touched.info === false)) {
        return '';
      }
      if ((this.state.inputValue !== '') && (this.state.touched.info === true)) {
        if (this.state.class === 'blur') {
          return 'complete'

        }
        else {
          return 'used'
        }
      }
      if ((this.state.inputValue === '') && (this.state.touched.info === true)) {
        return 'used';
      }

      // switch (this.state.class) {
      //   case 'blur':
      //
      //     break;
      //   default:
      //
      // }
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
        <input type='text' style={inputStyle} className={validateClass()} onFocus={() => this.handleFocus('info')} onChange={this.handleChange} onBlur={this.handleBlur} value={val}/>
        {/*}<span className='highlight'></span> */}
        <span className='bar'></span>
        <label>Title</label>
      </div>
    )
  }

}

export default MyCSSInput;
