import React, { Component } from "react";
import DescriptionField from "./DescriptionField";

const Sheet = props => {
  console.log("props: ");
  console.dir(props);
  return (
    <>
      <h1>Vampire</h1>
      <div className="leftHeader">
        Names:
        <DescriptionField
          value={props.description.name}
          updateValue={e => {
            props.changeDescription("name", e.target.value);
          }}
        />
      </div>
      <div className="leftHeader">
        Player:
        <DescriptionField
          value={props.description.player}
          updateValue={e => {
            props.changeDescription("player", e.target.value);
          }}
        />
      </div>
      <div className="leftHeader">
        Chronicle:
        <DescriptionField
          value={props.description.chronicle}
          updateValue={e => {
            props.changeDescription("chronicle", e.target.value);
          }}
        />
      </div>
      <div className="midHeader">
        Nature:
        <DescriptionField
          value={props.description.nature}
          updateValue={e => {
            props.changeDescription("nature", e.target.value);
          }}
        />
      </div>
      <div className="midHeader">
        Demeanor:
        <DescriptionField
          value={props.description.demeanor}
          updateValue={e => {
            props.changeDescription("demeanor", e.target.value);
          }}
        />
      </div>
      <div className="midHeader">
        Clan:
        <DescriptionField
          value={props.description.clan}
          updateValue={e => {
            props.changeDescription("clan", e.target.value);
          }}
        />
      </div>
      <div className="rightHeader">
        Generation:
        <DescriptionField
          value={props.description.generation}
          updateValue={e => {
            props.changeDescription("generation", e.target.value);
          }}
        />
      </div>
      <div className="rightHeader">
        Haven:
        <DescriptionField
          value={props.description.haven}
          updateValue={e => {
            props.changeDescription("haven", e.target.value);
          }}
        />
      </div>
      <div className="rightHeader">
        Concept:
        <DescriptionField
          value={props.description.concept}
          updateValue={e => {
            props.changeDescription("concept", e.target.value);
          }}
        />
      </div>

      <h3></h3>
      <div className="attributes">Physical</div>
      <button></button>
      <div className="attributes">Social</div>

      <div className="attributes">Mental</div>

      <h3></h3>

      <h3></h3>
    </>
  );
};

export default Sheet;

//Prop Types
