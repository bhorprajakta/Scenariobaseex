
import React, { useId } from 'react';

function Scenario4() {
  const id = useId(); //genrate unquie id

  return (
    <form>
      <div>
        <label htmlFor={id}>Email address</label>
        <input type="email" id={id} name="email" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Scenario4;





