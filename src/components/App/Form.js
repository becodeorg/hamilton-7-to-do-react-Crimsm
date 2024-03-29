import React, { useRef } from "react";

export default function Form() {
  return (
    <div>
      <input type="text" placeholder="Write a new todo" />
      <br />
      <button>Add todo</button>
    </div>
  );
}

export default function Form() {
    function clickHandler() {
      // Something...
    }
  
    return (
      <div>
        <input type="text" placeholder="Write a new todo" />
        <br />
        <button onClick={clickHandler}>Add todo</button>
      </div>
    );
  }

  export default function Form() {
    const inputRef = useRef();
  
    function clickHandler() {
      const inputElement = inputRef.current;
  
      // Do something with inputElement...
      console.log(inputElement.value);
    }
  
    return (
      <div>
        <input ref={inputRef} type="text" placeholder="Write a new todo" />
        <br />
        <button onClick={clickHandler}>Add todo</button>
      </div>
    );
  }
  