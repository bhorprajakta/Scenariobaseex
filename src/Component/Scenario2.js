import React, { useEffect, useRef, useState } from 'react'

function Scenario2() {
  const ref = useRef(null)
  const [isdrag, setisdrag] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      if (isdrag) {
        let a = e.clientX;
        let b = e.clientY;
        setPosition({ x: a, y: b })
        if (ref.current) {
          ref.current.style.left = a
          ref.current.style.top = b
          ref.current.getBoundingClientRect()
        }
      }
    }

    function handleMouseUp() {
      setisdrag(false)
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isdrag])

  return (
    <>
      <div className='maindiv' onMouseDown={() => setisdrag(true)}>
        <div className='dragme' style={{ left: position.x, top: position.y }}>Drag me</div>
      </div>
    </>
  )
}

export default Scenario2

