import React from 'react'
import Button from '../components/Button'
import styles from './boxColor.module.css' 

function BoxColor() {
  const [color, setColor] = React.useState(null);

  function handleChangeColor(newColor) {
    newColor == color ? setColor(null) : setColor(newColor);
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}
        style = {{
          backgroundColor: !color ? 'red' : color
        }}
        onClick={() => handleChangeColor('red')}>
          Red
      </div>

      <div className={styles.box}
        style = {{
          backgroundColor: !color ? 'gold' : color
        }}
        onClick={() => handleChangeColor('gold')}>
          Gold
      </div>

      <div className={styles.box}
        style = {{
          backgroundColor: !color ? 'aqua' : color
        }}
        onClick={() => handleChangeColor('aqua')}>
          Aqua
      </div>

      <div className={styles.box}
        style = {{
          backgroundColor: !color ? 'purple' : color
        }}
        onClick={() => handleChangeColor('purple')}>
          Purple
      </div>
    </div>
  )
}

export default BoxColor