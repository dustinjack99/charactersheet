import React, { Component } from "react";
import Sheet from "./Sheet";

const initialState = {
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

type AppState = typeof initialState;

class App extends Component<{}, AppState> {
  state = initialState;

  changeDescription = (prop: string, newValue: string) => {
    const description = this.state.description;
    const newDescription = { ...description, [prop]: newValue };
    this.setState({
      description: newDescription
    });
  };

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