import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// components
import BoxForm from '../components/Box/BoxForm';
import BoxList from '../components/Box/BoxList';
import BoxItem from '../components/Box/BoxItem';

function GenerateBox() {
  const [boxes, setBoxes] = React.useState([]);

  function handleAdd(number) {
    setBoxes([]);
    for (let i = 1; i <= number; i++) {
      setBoxes(prevState => ([...prevState, {
        id: i,
        color: 808080
      }]))
    }
  }

  function changeColor(id) {
    const clonedBoxes = [...boxes];
    const index = clonedBoxes.findIndex(box => box.id === id);
    clonedBoxes[index].color = Math.random().toString(16).substr(-6)
    setBoxes(clonedBoxes)
  } 

  console.log('boxes: ', boxes)

  return (
    <div>
      <BoxForm handleAdd={handleAdd} />

      <hr />
      <BoxList boxes={boxes} />
      <hr />
      <BoxItem boxes={boxes} changeColor={changeColor} />

    </div>
  )
}

export default GenerateBox