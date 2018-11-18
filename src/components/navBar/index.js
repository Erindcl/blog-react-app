import React, { Component } from 'react';
import './index.css';

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="nav-bar">
        { this.props.text }
      </div>
    )
  };
}

export default NavBar;