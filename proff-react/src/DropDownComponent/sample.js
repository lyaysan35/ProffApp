import React, { Component } from "react";
import { Dropdown } from 'semantic-ui-react'
// import ReactDOM from "react-dom";
// console.log(this)
const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/christian.jpg' },
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg' },
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    // image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg' },
  },
]

const DropdownExampleSelection = (props) => (
  <Dropdown placeholder='Select Field' fluid selection options={friendOptions} onChange={props.change}/>
)

export default DropdownExampleSelection;
