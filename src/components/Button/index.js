import React from 'react';

function Button(props) {
    return (
        <div>
        <button style={{color: "red"}}>{props.name}</button>
        </div>
    );
  }
  
  export default Button;
  