import React, { Component } from "react";

interface Props {
  label: string;
  value: string;
  updateValue: (newVal: string) => void;
}

const DescriptionField = (props) => {
  return (
    <div>
      {props.label}
      <input
        type="text"
        value={props.value}
        onChange={props.updateValue}
      ></input>
    </div>
  );
};

export default DescriptionField;
