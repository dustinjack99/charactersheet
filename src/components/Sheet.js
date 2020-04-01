import React, { Component } from "react";
import DescriptionField from "./DescriptionField";

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
        <datalist id="natDem">
          <option value="Architect"></option>
          <option value="Autocrat"></option>
          <option value="Bon Vivant"></option>
          <option value="Bravo"></option>
          <option value="Caregiver"></option>
          <option value="Celebrant"></option>
          <option value="Child"></option>
          <option value="Competitor"></option>
          <option value="Conformist"></option>
          <option value="Conniver"></option>
          <option value="Curmudgeon"></option>
          <option value="Deviant"></option>
          <option value="Director"></option>
          <option value="Fanatic"></option>
          <option value="Gallant"></option>
          <option value="Judge"></option>
          <option value="Loner"></option>
          <option value="Martyr"></option>
          <option value="Masochist"></option>
          <option value="Monster"></option>
          <option value="Pedagogue"></option>
          <option value="Penitent"></option>
          <option value="Perfectionist"></option>
          <option value="Rebel"></option>
          <option value="Rogue"></option>
          <option value="Survivor"></option>
          <option value="Thrill-Seeker"></option>
          <option value="Traditionalist"></option>
          <option value="Trickster"></option>
          <option value="Visionary"></option>
        </datalist>
      </div>
      <div className="midHeader">
        Demeanor:
        <input name="demeanor" list="natDem"></input>
      </div>
      <div className="midHeader">
        Clan:
        <input name="clans " list="clans"></input>
        <datalist id="clans">
          <option value="Ventrue"></option>
          <option value="Tremere"></option>
          <option value="Toreador"></option>
          <option value="Brujah"></option>
          <option value="Gangrel"></option>
          <option value="Malkavian"></option>
          <option value="Nosferatu"></option>
          <option value="Followers of Set"></option>
          <option value="Giovanni"></option>
          <option value="Ravnos"></option>
          <option value="Tzimisce"></option>
          <option value="Assamite"></option>
          <option value="Losambra"></option>
        </datalist>
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
            <button className="strengthAtt"></button>
            <button className="strengthAtt"></button>
            <button className="strengthAtt"></button>
            <button className="strengthAtt"></button>
            <button className="strengthAtt"></button>
          </h4>
          <h4>
            Dexterity
            <button className="dexterityAtt"></button>
            <button className="dexterityAtt"></button>
            <button className="dexterityAtt"></button>
            <button className="dexterityAtt"></button>
            <button className="dexterityAtt"></button>
          </h4>
          <h4>
            Stamina
            <button className="staminaAtt"></button>
            <button className="staminaAtt"></button>
            <button className="staminaAtt"></button>
            <button className="staminaAtt"></button>
            <button className="staminaAtt"></button>
          </h4>
        </div>

        <div className="attributes">
          <h3>Social</h3>
          <h4>
            Charisma
            <button className="charismaAtt"></button>
            <button className="charismaAtt"></button>
            <button className="charismaAtt"></button>
            <button className="charismaAtt"></button>
            <button className="charismaAtt"></button>
          </h4>
          <h4>
            Manipulation
            <button className="manipulationAtt"></button>
            <button className="manipulationAtt"></button>
            <button className="manipulationAtt"></button>
            <button className="manipulationAtt"></button>
            <button className="manipulationAtt"></button>
          </h4>
          <h4>
            Appearance
            <button className="appearanceAtt"></button>
            <button className="appearanceAtt"></button>
            <button className="appearanceAtt"></button>
            <button className="appearanceAtt"></button>
            <button className="appearanceAtt"></button>
          </h4>
        </div>

        <div className="attributes">
          <h3>Mental</h3>
          <h4>
            Perception
            <button className="perceptionAtt"></button>
            <button className="perceptionAtt"></button>
            <button className="perceptionAtt"></button>
            <button className="perceptionAtt"></button>
            <button className="perceptionAtt"></button>
          </h4>
          <h4>
            Intelligence
            <button className="intelligenceAtt"></button>
            <button className="intelligenceAtt"></button>
            <button className="intelligenceAtt"></button>
            <button className="intelligenceAtt"></button>
            <button className="intelligenceAtt"></button>
          </h4>
          <h4>
            Wits
            <button className="witsAtt"></button>
            <button className="witsAtt"></button>
            <button className="witsAtt"></button>
            <button className="witsAtt"></button>
            <button className="witsAtt"></button>
          </h4>
        </div>
      </div>

      <div className="allAbs">
        <h2>Abilities</h2>
        <div className="abilities">
          <h3>Talents</h3>
          <h4>
            Alertness
            <button className="alertnessAb"></button>
            <button className="alertnessAb"></button>
            <button className="alertnessAb"></button>
            <button className="alertnessAb"></button>
            <button className="alertnessAb"></button>
          </h4>
          <h4>
            Athletics
            <button className="athleticsAb"></button>
            <button className="athleticsAb"></button>
            <button className="athleticsAb"></button>
            <button className="athleticsAb"></button>
            <button className="athleticsAb"></button>
          </h4>
          <h4>
            Awareness
            <button className="awarenessAb"></button>
            <button className="awarenessAb"></button>
            <button className="awarenessAb"></button>
            <button className="awarenessAb"></button>
            <button className="awarenessAb"></button>
          </h4>
          <h4>
            Brawl
            <button className="brawlAb"></button>
            <button className="brawlAb"></button>
            <button className="brawlAb"></button>
            <button className="brawlAb"></button>
            <button className="brawlAb"></button>
          </h4>
          <h4>
            Empathy
            <button className="empathyAb"></button>
            <button className="empathyAb"></button>
            <button className="empathyAb"></button>
            <button className="empathyAb"></button>
            <button className="empathyAb"></button>
          </h4>
          <h4>
            Expression
            <button className="expressionAb"></button>
            <button className="expressionAb"></button>
            <button className="expressionAb"></button>
            <button className="expressionAb"></button>
            <button className="expressionAb"></button>
          </h4>
          <h4>
            Intimidation
            <button className="intimidationAb"></button>
            <button className="intimidationAb"></button>
            <button className="intimidationAb"></button>
            <button className="intimidationAb"></button>
            <button className="intimidationAb"></button>
          </h4>
          <h4>
            Leadership
            <button className="leadershipAb"></button>
            <button className="leadershipAb"></button>
            <button className="leadershipAb"></button>
            <button className="leadershipAb"></button>
            <button className="leadershipAb"></button>
          </h4>
          <h4>
            Streetwise
            <button className="streetwiseAb"></button>
            <button className="streetwiseAb"></button>
            <button className="streetwiseAb"></button>
            <button className="streetwiseAb"></button>
            <button className="streetwiseAb"></button>
          </h4>
          <h4>
            Subterfuge
            <button className="subterfugeAb"></button>
            <button className="subterfugeAb"></button>
            <button className="subterfugeAb"></button>
            <button className="subterfugeAb"></button>
            <button className="subterfugeAb"></button>
          </h4>
        </div>

        <div className="abilities">
          <h3>Skills</h3>
          <h4>
            AnimalKen
            <button className="animalKenAb"></button>
            <button className="animalKenAb"></button>
            <button className="animalKenAb"></button>
            <button className="animalKenAb"></button>
            <button className="animalKenAb"></button>
          </h4>
          <h4>
            Crafts
            <button className="craftsAb"></button>
            <button className="craftsAb"></button>
            <button className="craftsAb"></button>
            <button className="craftsAb"></button>
            <button className="craftsAb"></button>
          </h4>
          <h4>
            Drive
            <button className="driveAb"></button>
            <button className="driveAb"></button>
            <button className="driveAb"></button>
            <button className="driveAb"></button>
            <button className="driveAb"></button>
          </h4>
          <h4>
            Etiquette
            <button className="etiquetteAb"></button>
            <button className="etiquetteAb"></button>
            <button className="etiquetteAb"></button>
            <button className="etiquetteAb"></button>
            <button className="etiquetteAb"></button>
          </h4>
          <h4>
            Firearms
            <button className="firearmsAb"></button>
            <button className="firearmsAb"></button>
            <button className="firearmsAb"></button>
            <button className="firearmsAb"></button>
            <button className="firearmsAb"></button>
          </h4>
          <h4>
            Larceny
            <button className="larcenyAb"></button>
            <button className="larcenyAb"></button>
            <button className="larcenyAb"></button>
            <button className="larcenyAb"></button>
            <button className="larcenyAb"></button>
          </h4>
          <h4>
            Melee
            <button className="meleeAb"></button>
            <button className="meleeAb"></button>
            <button className="meleeAb"></button>
            <button className="meleeAb"></button>
            <button className="meleeAb"></button>
          </h4>
          <h4>
            Performance
            <button className="performanceAb"></button>
            <button className="performanceAb"></button>
            <button className="performanceAb"></button>
            <button className="performanceAb"></button>
            <button className="performanceAb"></button>
          </h4>
          <h4>
            Stealth
            <button className="stealthAb"></button>
            <button className="stealthAb"></button>
            <button className="stealthAb"></button>
            <button className="stealthAb"></button>
            <button className="stealthAb"></button>
          </h4>
          <h4>
            Survival
            <button className="survivalAb"></button>
            <button className="survivalAb"></button>
            <button className="survivalAb"></button>
            <button className="survivalAb"></button>
            <button className="survivalAb"></button>
          </h4>
        </div>

        <div className="abilities">
          <h3>Knowledges</h3>
          <h4>
            Academics
            <button className="academicsAb"></button>
            <button className="academicsAb"></button>
            <button className="academicsAb"></button>
            <button className="academicsAb"></button>
            <button className="academicsAb"></button>
          </h4>
          <h4>
            Computer
            <button className="computerAb"></button>
            <button className="computerAb"></button>
            <button className="computerAb"></button>
            <button className="computerAb"></button>
            <button className="computerAb"></button>
          </h4>
          <h4>
            Finance
            <button className="financeAb"></button>
            <button className="financeAb"></button>
            <button className="financeAb"></button>
            <button className="financeAb"></button>
            <button className="financeAb"></button>
          </h4>
          <h4>
            Investigation
            <button className="investigationAb"></button>
            <button className="investigationAb"></button>
            <button className="investigationAb"></button>
            <button className="investigationAb"></button>
            <button className="investigationAb"></button>
          </h4>
          <h4>
            Law
            <button className="lawAb"></button>
            <button className="lawAb"></button>
            <button className="lawAb"></button>
            <button className="lawAb"></button>
            <button className="lawAb"></button>
          </h4>
          <h4>
            Medicine
            <button className="medicineAb"></button>
            <button className="medicineAb"></button>
            <button className="medicineAb"></button>
            <button className="medicineAb"></button>
            <button className="medicineAb"></button>
          </h4>
          <h4>
            Occult
            <button className="occultAb"></button>
            <button className="occultAb"></button>
            <button className="occultAb"></button>
            <button className="occultAb"></button>
            <button className="occultAb"></button>
          </h4>
          <h4>
            Politics
            <button className="politicsAb"></button>
            <button className="politicsAb"></button>
            <button className="politicsAb"></button>
            <button className="politicsAb"></button>
            <button className="politicsAb"></button>
          </h4>
          <h4>
            Science
            <button className="scienceAb"></button>
            <button className="scienceAb"></button>
            <button className="scienceAb"></button>
            <button className="scienceAb"></button>
            <button className="scienceAb"></button>
          </h4>
          <h4>
            Technology
            <button className="technologyAb"></button>
            <button className="technologyAb"></button>
            <button className="technologyAb"></button>
            <button className="technologyAb"></button>
            <button className="technologyAb"></button>
          </h4>
        </div>
      </div>

      <div className="allAdv">
        <h2>Advantages</h2>
        <div className="disciplines">
          <h3>Disciplines</h3>
          <input type="text"></input>
          <button className="disc1"></button>
          <button className="disc1"></button>
          <button className="disc1"></button>
          <button className="disc1"></button>
          <button className="disc1"></button>
          <input type="text"></input>
          <button className="disc2"></button>
          <button className="disc2"></button>
          <button className="disc2"></button>
          <button className="disc2"></button>
          <button className="disc2"></button>
          <input type="text"></input> <button className="disc3"></button>
          <button className="disc3"></button>
          <button className="disc3"></button>
          <button className="disc3"></button>
          <button className="disc3"></button>
          <input type="text"></input>
          <button className="disc4"></button>
          <button className="disc4"></button>
          <button className="disc4"></button>
          <button className="disc4"></button>
          <button className="disc4"></button>
          <input type="text"></input>
          <button className="disc5"></button>
          <button className="disc5"></button>
          <button className="disc5"></button>
          <button className="disc5"></button>
          <button className="disc5"></button>
          <input type="text"></input> <button className="disc6"></button>
          <button className="disc6"></button>
          <button className="disc6"></button>
          <button className="disc6"></button>
          <button className="disc6"></button>
        </div>
      </div>

      <div className="backgrounds">
        <h3>Backgrounds</h3>
        <input type="text"></input>
        <button className="back1"></button>
        <button className="back1"></button>
        <button className="back1"></button>
        <button className="back1"></button>
        <button className="back1"></button>
        <input type="text"></input>
        <button className="back2"></button>
        <button className="back2"></button>
        <button className="back2"></button>
        <button className="back2"></button>
        <button className="back2"></button>
        <input type="text"></input>
        <button className="back3"></button>
        <button className="back3"></button>
        <button className="back3"></button>
        <button className="back3"></button>
        <button className="back3"></button>
        <input type="text"></input>
        <button className="back4"></button>
        <button className="back4"></button>
        <button className="back4"></button>
        <button className="back4"></button>
        <button className="back4"></button>
        <input type="text"></input>
        <button className="back5"></button>
        <button className="back5"></button>
        <button className="back5"></button>
        <button className="back5"></button>
        <button className="back5"></button>
        <input type="text"></input>
        <button className="back6"></button>
        <button className="back6"></button>
        <button className="back6"></button>
        <button className="back6"></button>
        <button className="back6"></button>
      </div>

      <div className="virtues">
        <h3>Virtues</h3>
        <h4>
          {" "}
          Conscience / Convicton
          <button className="con"></button>
          <button className="con"></button>
          <button className="con"></button>
          <button className="con"></button>
          <button className="con"></button>
        </h4>
        <h4>
          {" "}
          Self-Control / Instinct
          <button className="selfInst"></button>
          <button className="selfInst"></button>
          <button className="selfInst"></button>
          <button className="selfInst"></button>
          <button className="selfInst"></button>
        </h4>
        <h4>
          {" "}
          Courage
          <button className="courage"></button>
          <button className="courage"></button>
          <button className="courage"></button>
          <button className="courage"></button>
          <button className="courage"></button>
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
