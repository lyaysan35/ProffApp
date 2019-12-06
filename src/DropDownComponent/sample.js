import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
// import ReactDOM from "react-dom";
// console.log(this)
const fieldOptions = [
  {
    key: 'Art',
    text: 'Art',
    value: 'Art', 
  },
  {
    key: 'Education',
    text: 'Education',
    value: 'Education',
  },
  {
    key: 'Entertainment',
    text: 'Entertainment',
    value: 'Entertainment',  
  },
  {
    key: 'Food',
    text: 'Food',
    value: 'Food',
  },
  {
    key: 'Law',
    text: 'Law',
    value: 'Law',  
  }, 
  {
    key: 'Medicine',
    text: 'Medicine',
    value: 'Medicine',  
  },
  {
    key: 'Real Estate',
    text: 'Real Estate',
    value: 'Real Estate',
    
  },
];

const locationOptions = [
  {
    key: 'Aspen',
    text: 'Aspen',
    value: 'Aspen',
  },
  {
    key: 'Aurora',
    text: 'Aurora',
    value: 'Aurora',
  },
  {
    key: 'Boulder',
    text: 'Boulder',
    value: 'Boulder', 
  },
  {
    key: 'Colorado Springs',
    text: 'Colorado Springs',
    value: 'Colorado Springs',
  },
  {
    key: 'Denver',
    text: 'Denver',
    value: 'Denver',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Fort Collins',
    text: 'Fort Collins',
    value: 'Fort Collins',
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
