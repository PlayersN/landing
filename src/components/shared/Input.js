import React from 'react';
import '../../stylesheets/components/shared/Input.css';

export default class Input extends React.Component {
  render() {
    const {
      id = null,
      type = null,
      placeholder = null,
      name = null,
      value = '',
      onChange = undefined,
      error = false,
    } = this.props;

    const errorClass = (error) ? 'error' : '';
    return(
      <input
        className={`input ${errorClass}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    );
  }
}