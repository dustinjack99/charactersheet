import React, { Component } from "react";
import DescriptionField from "./DescriptionField";
import NatureDemeanor from "./NatureDemeanor";
import Clans from "./Clans";
import Backgrounds from "./Backgrounds";
import Disciplines from "./Disciplines";
import StatButtons from "./StatButtons";

const Sheet = props => {
  console.log("props: ");
  console.dir(props);
  return (
    <>
      <h1>Vampire</h1>
      <div className="leftHeader">
        Name:
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
        <input name="Nature" list="natDem"></input>
        <NatureDemeanor />
      </div>
      <div className="midHeader">
        Demeanor:
        <input name="demeanor" list="natDem"></input>
      </div>
      <div className="midHeader">
        Clan:
        <input name="clans " list="clans"></input>
        <Clans />
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
        Sire:
        <DescriptionField
          value={props.description.haven}
          updateValue={e => {
            props.changeDescription("sire", e.target.value);
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

      <div className="allAtts">
        <h2>Attributes</h2>
        <div className="attributes">
          <h3>Physical</h3>
          <h4>
            Strength
            <StatButtons />
          </h4>
          <h4>
            Dexterity
            <StatButtons />
          </h4>
          <h4>
            Stamina
            <StatButtons />
          </h4>
        </div>

        <div className="attributes">
          <h3>Social</h3>
          <h4>
            Charisma
            <StatButtons />
          </h4>
          <h4>
            Manipulation
            <StatButtons />
          </h4>
          <h4>
            Appearance
            <StatButtons />
          </h4>
        </div>

        <div className="attributes">
          <h3>Mental</h3>
          <h4>
            Perception
            <StatButtons />
          </h4>
          <h4>
            Intelligence
            <StatButtons />
          </h4>
          <h4>
            Wits
            <StatButtons />
          </h4>
        </div>
      </div>

      <div className="allAbs">
        <h2>Abilities</h2>
        <div className="abilities">
          <h3>Talents</h3>
          <h4>
            Alertness
            <StatButtons />
          </h4>
          <h4>
            Athletics
            <StatButtons />
          </h4>
          <h4>
            Awareness
            <StatButtons />
          </h4>
          <h4>
            Brawl
            <StatButtons />
          </h4>
          <h4>
            Empathy
            <StatButtons />
          </h4>
          <h4>
            Expression
            <StatButtons />
          </h4>
          <h4>
            Intimidation
            <StatButtons />
          </h4>
          <h4>
            Leadership
            <StatButtons />
          </h4>
          <h4>
            Streetwise
            <StatButtons />
          </h4>
          <h4>
            Subterfuge
            <StatButtons />
          </h4>
        </div>

        <div className="abilities">
          <h3>Skills</h3>
          <h4>
            AnimalKen
            <StatButtons />
          </h4>
          <h4>
            Crafts
            <StatButtons />
          </h4>
          <h4>
            Drive
            <StatButtons />
          </h4>
          <h4>
            Etiquette
            <StatButtons />
          </h4>
          <h4>
            Firearms
            <StatButtons />
          </h4>
          <h4>
            Larceny
            <StatButtons />
          </h4>
          <h4>
            Melee
            <StatButtons />
          </h4>
          <h4>
            Performance
            <StatButtons />
          </h4>
          <h4>
            Stealth
            <StatButtons />
          </h4>
          <h4>
            Survival
            <StatButtons />
          </h4>
        </div>

        <div className="abilities">
          <h3>Knowledges</h3>
          <h4>
            Academics
            <StatButtons />
          </h4>
          <h4>
            Computer
            <StatButtons />
          </h4>
          <h4>
            Finance
            <StatButtons />
          </h4>
          <h4>
            Investigation
            <StatButtons />
          </h4>
          <h4>
            Law
            <StatButtons />
          </h4>
          <h4>
            Medicine
            <StatButtons />
          </h4>
          <h4>
            Occult
            <StatButtons />
          </h4>
          <h4>
            Politics
            <StatButtons />
          </h4>
          <h4>
            Science
            <StatButtons />
          </h4>
          <h4>
            Technology
            <StatButtons />
          </h4>
        </div>
      </div>

      <div className="allAdv">
        <h2>Advantages</h2>
        <div className="disciplines">
          <h3>Disciplines</h3>
          <Disciplines />
          <input list="disciplines"></input>
          <StatButtons />
          <input list="disciplines"></input>
          <StatButtons />
          <input list="disciplines"></input>
          <StatButtons />
          <input list="disciplines"></input>
          <StatButtons />
          <input list="disciplines"></input>
          <StatButtons />
          <input list="disciplines"></input>
          <StatButtons />
        </div>
      </div>

      <div className="backgrounds">
        <h3>Backgrounds</h3>
        <Backgrounds />
        <input list="backgrounds"></input>
        <StatButtons />
        <input list="backgrounds"></input>
        <StatButtons />
        <input list="backgrounds"></input>
        <StatButtons />
        <input list="backgrounds"></input>
        <StatButtons />
        <input list="backgrounds"></input>
        <StatButtons />
        <input list="backgrounds"></input>
        <StatButtons />
      </div>

      <div className="virtues">
        <h3>Virtues</h3>
        <h4>
          {" "}
          Conscience / Convicton
          <StatButtons />
        </h4>
        <h4>
          {" "}
          Self-Control / Instinct
          <StatButtons />
        </h4>
        <h4>
          {" "}
          Courage
          <StatButtons />
        </h4>
        <div>
          <h3>
            Humanity
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
            <button className="humanitybtn"></button>
          </h3>
          <h3>
            Willpower
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <button className="willpowerbtn"></button>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
            <input type="checkbox" className="willpowerchx"></input>
          </h3>
          <h3>
            Blood Pool
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
            <input type="checkbox" className="bloodpool"></input>
          </h3>
          <h3>
            Health
            <h5>
              Bruised<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Hurt -1<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Injured -1<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Wounded -2<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Mauled -2<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Crippled -5<input type="checkbox" className="healthchx"></input>
            </h5>
            <h5>
              Incapacitated{" "}
              <input type="checkbox" className="healthchx"></input>
            </h5>
          </h3>

          <h3>Weakness</h3>
          <h3>
            Experience <input type="number"></input>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Sheet;

//Prop Types
