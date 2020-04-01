import React, { Component } from "react";

const DescriptionField = props => {
  return (
    <input type="text" value={props.value} onChange={props.updateValue}></input>
  );
};

export default DescriptionField;
