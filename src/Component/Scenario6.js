import React, { useId, useState } from 'react';

function Scenario6() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const id1 = useId();
  const id2 = useId();
  return (
    <>
      <div>
        <button id={id1} aria-controls={id1} aria-expanded={isOpen1} onClick={() => setIsOpen1(!isOpen1)}>label1</button>
        {isOpen1 && (
          <p aria-labelledby={id1}>
            this is label 1 isopen
          </p>
        )}
      </div>
      <div>
        <button id={id2} aria-controls={id2} aria-expanded={isOpen2} onClick={() => setIsOpen2(!isOpen2)}>label2</button>
        {isOpen2 && (
          <p aria-labelledby={id2}>
            this is label 2 isopen
          </p>
        )}
      </div>
    </>
  );
}
export default Scenario6;












