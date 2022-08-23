import React, { Component } from "react";
import "./styles/CharacterCard.scss";

class CharacterCard extends Component {
  state: [];
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="card">
        <img className="card__image" src={this.props.character.image} alt="" />
        <p>
          <b>{this.props.character.name}</b>
        </p>
      </li>
    );
  }
}

export default CharacterCard;
