/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types'; // ES6

function BoxList({ boxes }) {
  return (
    <div>
      <h5>BoxList</h5>
      Total box: {boxes.length}
    </div>
  )
}

export default BoxList
BoxList.propTypes = {
    handleAdd: PropTypes.func,
}