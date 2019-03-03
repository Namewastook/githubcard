import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Card } from "semantic-ui-react";

class App extends Component {
  state = {
    user: {},
    active: false
  };
  handleToggle = () => {
    if (this.state.active === true) {
      this.setState({ active: false });
    } else {
      fetch("https://api.github.com/users/Davegregg")
        .then(res => res.json())
        .then(user => this.setState({ user: user, active: true }));
    }
  };
  render() {
    return (
      <div>
        <Button onClick={this.handleToggle}>Toggle</Button>{" "}
        {this.state.active && (
          <Card
            image={this.state.user.avatar_url}
            header={`Name:${this.state.user.name}`}
            meta={`Followers:${this.state.user.followers}`}
            description={`Bio:${this.state.user.bio}`}
          />
        )}
      </div>
    );
  }
}

export default App;
