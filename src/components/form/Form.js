import React from 'react';
import './Form.scss';

const Form = ({data}) => {
  return (
    <div className='form'>
        Form
        {data && console.log(data)}
    </div>
  )
}

export default Form;