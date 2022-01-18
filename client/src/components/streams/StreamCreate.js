import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className='ui error message'>
          <div className='header'>{meta.error}</div>
        </div>
      )
    }
  }

  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />

      // {...formProps.input} this will take all key value pairs like, onChange, input etc. and add them properties to the input element
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        {/* <div>{formProps.meta.error}</div> */}
        {this.renderError(formProps.meta)}
      </div>
    )
  }

  onSubmit(formValues) {
    console.log(formValues)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='title'
            component={this.renderInput}
            label='Enter Title'
          />
          <Field
            name='description'
            component={this.renderInput}
            label='Enter Description'
          />
          <button className='ui button primary'>Submit</button>
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title!'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description!'
  }

  return errors
}

export default reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate)
