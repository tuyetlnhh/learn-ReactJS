/* eslint-disable react/prop-types */
import React from 'react'
import styles from './boxItem.module.css'
function BoxItem({ boxes, changeColor }) {
  return (
    <div className={styles.container}>
        {boxes.map(box => (
          <div className={styles.box_item}
          style = {{
            backgroundColor: "#"+box.color
          }}
          key = {box.id} onClick={() => changeColor(box.id)}>
            Box#{box.id}
          </div>
       ))}
    </div>
  )
}

export default BoxItem