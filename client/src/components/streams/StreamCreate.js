import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      // <input
      //   onChange={formProps.input.onChange}
      //   value={formProps.input.value}
      // />

      <input {...formProps.input} /> // {...formProps.input} this will take all key value pairs like, onChange, input etc. and add them properties to the input element
    )
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <Field name='title' component={this.renderInput} />
          <Field name='description' component={this.renderInput} />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'streamCreate',
})(StreamCreate)
