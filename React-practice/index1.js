
//date - 13 may 2021

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from 'react';
import ReactDOM from 'react-dom';

const name = "Yash Jain";
const currentyear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {currentyear}.</p>
  </div>,
  document.getElementById('root')
  
)

