import React, { useId } from 'react'

function Checkbox({ id, lable, checked }) {
  return (
    <>
      <input type='checkbox' checked={checked} id={id} />
      <label>{lable}</label>
    </>
  )
}
function Scenario5() {
  const id = useId();
  const arr = [
    { label: 'Marathi', checked: false },
    { label: 'English', checked: false },
    { label: 'Hindi', checked: false },
  ];

  return (
    <div>{
      arr.map((item, i) => {
        return (
          <Checkbox key={i} id={id} lable={item.label} checked={item.checked} />
        )
      })
    }
    </div>
  )
}
export default Scenario5




