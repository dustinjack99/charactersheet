import React, { Component } from "react";
import Sheet from "./Sheet";

class App extends Component {
  changeDescription = (prop, newValue) => {
    const description = this.state.description;
    const newDescription = { ...description, [prop]: newValue };
    this.setState({
      description: newDescription
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      description: {
        name: "",
        player: "",
        chronicle: "",
        nature: "",
        demeanor: "",
        clan: "",
        generation: "",
        haven: "",
        concept: ""
      }
    };
  }

  render() {
    return (
      <div>
        <Sheet
          description={this.state.description}
          changeDescription={this.changeDescription}
        />
      </div>
    );
  }
}

export default App;
