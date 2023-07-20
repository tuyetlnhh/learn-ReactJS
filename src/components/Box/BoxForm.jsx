import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'; // ES6

function BoxForm({ handleAdd }) {
  const [number, setNumber] = React.useState('');

  return (
    <div>
      <h5>Number of boxes: </h5>
      <input type="text" onChange={e => setNumber(e.target.value)} />
      <Button 
        buttonText='Generate' 
        onClick={() => {
          handleAdd(number)
        }}
      />

    </div>
  )
}

export default BoxForm
BoxForm.propTypes = {
    handleAdd: PropTypes.func,
}