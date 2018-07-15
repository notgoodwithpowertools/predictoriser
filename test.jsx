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
    <h1>New Item</h1>
    <p>Proposed by {user.firstname}</p>

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
        short: ''
      }}
      validate={values => {
        let errors = {};

        if (!values.short) {
          errors.short = 'Required'
        }
        return errors;
      }}
      onSubmit={(
        values,
        { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
      ) => {
        console.log("Form submitted...");
        addPred(user, values.short /*, values.long */).then(result => {
          console.log("addPred DB ID result:", result);
          setSubmitting(false);
          console.log("Add Values:", values);
          return values;
          // resetForm(values); <=No effect
        }, errors => {}).then((values) => {
          resetForm({});
          console.log("+++++++++++:", values);
        });

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
      }) => (

        <form onSubmit={handleSubmit}>

          <div>
          <MatInput

            type="textarea"
            name="short"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Short name..."

          />
          {touched.short && errors.short && <div>{errors.short}</div>}

          <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
            Call it
          </Button>
          </div>

        </form>

      )}
    />
  </div>
)};

export default FormikBasic;
