// Render Prop
import React from 'react';
import { Formik } from 'formik';

import { addPred, /*setPred */ } from '../actions/pred-actions.js';
// import Button from '@material-ui/core/Button';
// import MatInput from '@material-ui/core/Input';
import '../css/addForm.css';

const FormikBasic = ( props ) => {

  let { user } = props;
  console.log("FormikBasic user:", user);

  return (
  <div className='addPredPage'>
    <h1>New Prediction</h1>
    <p>Predicted by {user.firstname}</p>

    {/*
      The benefit of the render prop approach is that you have full access to React's
      state, props, and composition model. Thus there is no need to map outer props
      to values...you can just set the initial values, and if they depend on props / state
      then--boom--you can directly access to props / state.

      The render prop accepts your inner form component, which you can define separately or inline
      totally up to you:
      - `<Formik render={props => <form>...</form>}>`
      - `<Formik component={InnerForm}>`
      - `<Formik>{props => <form>...</form>}</Formik>` (identical to as render, just written differently)
    */}
    <Formik
      initialValues={{
        // long: '',
        short: ''
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};
        /*
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        */
        if (!values.short) {
          errors.short = 'Required'
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors /* setValues and other goodies */ }
      ) => {
        console.log("Form submitted...");
        // console.log("Email:", values.email);
        // setPred("Banana", user.uid);
        addPred(user.uid, values.short, values.long);
        // Do Stuff
        // LoginToMyApp(values).then(
        //   user => {
        //     setSubmitting(false);
        //     // do whatevs...
        //     // props.updateUser(user)
        //   },
        //   errors => {
        //     setSubmitting(false);
        //     // Maybe transform your API's errors into the same shape as Formik's
        //     setErrors(transformMyApiErrors(errors));
        //   }
        // );
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (

        <form onSubmit={handleSubmit}>
          <div className='addPredPageItem'>

          {/*
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {touched.password && errors.password && <div>{errors.password}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          */}

          {/* <MatInput

            type="textarea"
            name="short"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Short name..."

          /> */}


          {touched.long && errors.long && <div>{errors.long}</div>}

          <textarea className='ta' name="long" onChange={handleChange} onBlur={handleBlur} cols="40" rows="5" placeholder="Description..." />

          </div>
          {/*<Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            Call it
          </Button> */}
          <div className='addPredPageItem'>
          <button type="submit" disabled={isSubmitting}>Call it!
          </button>
          </div>

        </form>

      )}
    />
  </div>
)};

export default FormikBasic;
