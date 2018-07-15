import React from 'react';
import '../css/card.css';
import { getInitial } from '../api/auth.js';

export const PredictionCard = (info) => {

  // let { info } = props;
  // console.log("info:", info);
  var listInfo = () => {
    let outputArray = [];
    console.log("info:", info);
    // var initial = info.uname;
    // var initial = getInitial(info.uname);
    var initial = String(info.uname).charAt(0).toUpperCase()
    // var initial = initial.charAt(0)
    // console.log("initial:", initial);
    var value = JSON.stringify(info);
    console.log("Value:", value);
    outputArray.push(<div key={info.id}><div className='card'><div className='header'><span className='initials'>{initial}</span>{info.short}</div>{info.long}</div></div>)
    console.log("output:", outputArray);
    return outputArray;
    // for (const key of Object.keys(info)) {
    //   var value = info[key];
    //
    //   console.log("Value:", value);
    //   outputArray.push(<div key={info.id}><p>{value}</p></div>)
    // }
    // console.log("outputArray:", outputArray);
    // return outputArray;
    // info.values = obj => info.keys(obj).map(key => obj[key]);
    // let arrayLength = info.length;
  //
  //   for (var i = 0; i < arrayLength; i++) {
  //     console.log("Info:", info[i]);
  //     //Do something
  //   }
  }

  return (
      <div>
        { listInfo() }
      </div>
  )
}

export default PredictionCard;
