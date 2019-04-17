import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.number}</h4>
        <p>{this.props.description}</p>

        <img src={this.props.icon} alt="card icon" />
      </div>
    );
  }
}

export default Card;
