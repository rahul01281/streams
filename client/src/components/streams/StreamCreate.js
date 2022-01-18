import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />

      // {...formProps.input} this will take all key value pairs like, onChange, input etc. and add them properties to the input element
      <div className='field'>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    )
  }
  render() {
    return (
      <div>
        <form className='ui form'>
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
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
