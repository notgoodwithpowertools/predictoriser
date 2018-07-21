// Render Prop
import React from 'react';
import { Formik } from 'formik';

import { addPred } from '../actions/pred-actions.js';
import Button from '@material-ui/core/Button';
import '../css/addForm.css';
import TestInput from './TestInput.jsx';

import { getDateString } from '../api/datefuncs.js';

const FormikBasic = ( props ) => {

  let { user } = props;
  // console.log("FormikBasic user:", user);

  // get Minimum date


  return (

    <Formik
      initialValues={{
        // long: '',
        short: '',
        dateTime: '',
        dateTime2: ''
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};

        if (!values.short) {
          errors.short = 'Required'
        }
        if (!values.dateTime) {
          errors.dateTime = 'Required'
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
      ) => {
        console.log("Form submitted...");
        addPred(user, values.short, values.dateTime).then(result => {
          setSubmitting(false);
          resetForm();
        }, errors => {});

      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        isSubmitting,
        isValid
      }) => {

        // Check if fields are touched
        // console.log("Touched:", touched);

        // Set date input field color
        // let inputColor = 'purple';
        //
        // let inputStyle = {
        //   color: inputColor
        // }


        // if (values.dateTime === '') { // if dateTime has not been set
        //   inputStyle = {color: 'tomato'};  // set as warning color if not set
        // }
        // else {
        //   inputStyle = {color: 'blue'}; // else set to active color
        // }

        // console.log("Touched:", touched);
        // let datePlaceholder = getDateString(new Date());

        return (


          <div className='addPredPage'>
            <form autoComplete="off" onSubmit={handleSubmit}>

              <h3 className='addPredPageItem'>New Item</h3>
              <p className='addPredPageItem'>Call made by {user.firstname}</p>
              {/* <MyCSSInput /> */}
            <TestInput

              name="short"
              type="textarea"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.short || ''}
              placeholder='Enter details...'

            />
            <TestInput

              name="dateTime"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateTime || ''}
              min={getDateString(new Date())}
              title="Expiry"

            />
          {/*<div className='group'>
            <input

              id='expiry'
              style={inputStyle}
              name="dateTime"
              type='date'
              min="2018-07-01"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateTime || ''}

            />
            <span className='bar'></span>
            <label>{'Expiry'}</label>
          </div> */}
          {/* <FMKDateTime
              name="dateTime"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateTime || ''}

              title='Due Date'
              touched={touched}

            /> */}
            {/* <input
              type="text"
              name="short"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.short || ''}
            /> */}
            {/*}<MatInput
              value={values.short || ''}
              type="textarea"
              name="short"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Short name..."
              className='addPredPageItem'

              />
            {touched.short && errors.short && <div>{errors.short}</div>}
            */}
            {/*}<textarea className='ta' name="long" onChange={handleChange} cols="40" rows="5" placeholder="Description..." /> */}
            <div className='addPredPageItem'>
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitting || !isValid}>
              Call it
            </Button>
            </div>


        </form>
        </div>

      )}}
    />
)};

export default FormikBasic;
