import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
// import ReactDOM from "react-dom";
// console.log(this)
const fieldOptions = [
  {
    key: 'Any',
    text: 'Any',
    value: 'Any',
  },
  {
    key: 'Medicine',
    text: 'Medicine',
    value: 'Medicine',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Real Estate',
    text: 'Real Estate',
    value: 'Real Estate',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Beauty',
    text: 'Beauty',
    value: 'Beauty',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Art',
    text: 'Art',
    value: 'Art',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Law',
    text: 'Law',
    value: 'Law',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Food',
    text: 'Food',
    value: 'Food',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
  },
];

const locationOptions = [
  {
    key: 'Any',
    text: 'Any',
    value: 'Any',
  },
  {
    key: 'Denver',
    text: 'Denver',
    value: 'Denver',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Aurora',
    text: 'Aurora',
    value: 'Aurora',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Boulder',
    text: 'Boulder',
    value: 'Boulder',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Fort Collins',
    text: 'Fort Collins',
    value: 'Fort Collins',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Colorado Springs',
    text: 'Colorado Springs',
    value: 'Colorado Springs',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },

]; // fill this in


const DropdownExampleSelection = (props) => {
  let placeholder;
  let options;
  let name;
  if(props.isField) {
    name="field";
    placeholder = "Select Field"; 
    options = fieldOptions;
  } else if(props.isArea) {
    name="location"
    placeholder = "Location";
    options = locationOptions;
  }
  return <Dropdown 
    name={name} 
    placeholder={placeholder} 
    selection 
    options={options} 
    onChange={(e, { name, value }) => props.change(name, value)}
  />
}

export default DropdownExampleSelection;
