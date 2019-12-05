import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
// import ReactDOM from "react-dom";
// console.log(this)
const friendOptions = [
  {
    key: 'medicine',
    text: 'medicine',
    value: 'medicine',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'real estate',
    text: 'real estate',
    value: 'real estate',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'beauty',
    text: 'beauty',
    value: 'beauty',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'art',
    text: 'art',
    value: 'art',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  },
  {
    key: 'law',
    text: 'law',
    value: 'law',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
  },
  {
    key: 'food',
    text: 'food',
    value: 'food',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
  },
];

const locationOptions = []; // fill this in


const DropdownExampleSelection = (props) => {
  let placeholder;
  let options;
  if(props.isField) {
    placeholder = "Select Field"; 
    options = friendOptions;
  } else if(props.isArea) {
    placeholder = "Location";
    options = locationOptions;
  }
      return (<Dropdown placeholder={placeholder} selection options={options} onChange={props.change}/>)
}

export default DropdownExampleSelection;
