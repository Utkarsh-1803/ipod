import React, { useState, useEffect } from 'react';

function Count() {
  const [count, setValue] = useState(0);
useEffect(()=>{
    console.log(count);
});

 function reset(event){
setValue(0);
  }

  function plus(event){
   setValue(count + 1);
      }

      function minus(event){
        if(count == 0){
            return;
        }
        setValue(count - 1);
          }
  return(
    <div style={styles.box}>
          <span>Count Value is : {count}</span>
          <div style={styles.buttons}>
        <button onClick={reset}>Reset</button>
        <button onClick={plus}>Plus(+)</button>
        <button onClick={minus}>Minus(-)</button>
        </div>
    </div>
  );

}


const styles = { 
    box : {
        padding: '10px',
    },
        
    buttons: {
        display: 'flex',
    }
}

export default Count;