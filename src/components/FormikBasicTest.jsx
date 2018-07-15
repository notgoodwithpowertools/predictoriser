// Render Prop
import React from 'react';
import { Formik } from 'formik';

import { addPred, /*setPred */ } from '../actions/pred-actions.js';
import Button from '@material-ui/core/Button';
import MatInput from '@material-ui/core/Input';
import '../css/addForm.css';

const FormikBasic = ( props ) => {

  let { user } = props;
  console.log("FormikBasic user:", user);

  return (
  <div className='addPredPage'>
    <h1>New Prediction</h1>
    <p>Predicted by {user.firstname}</p>
      <form>
      <div className='addPredPageItem'>
      <textarea className='ta' name="long" cols="40" rows="5" placeholder="Description..." />
     </div>
     <div className='addPredPageItem'>


     <button>test</button>
    </div>
    </form>

  </div>



)};

export default FormikBasic;
