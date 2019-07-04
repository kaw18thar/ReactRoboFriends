import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'auto', border: 'dotted white 1px', height: '70vw'}}>
    {props.children}
    </div>
  );
};


export default Scroll;
