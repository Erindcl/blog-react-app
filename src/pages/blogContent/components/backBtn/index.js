import React, { Component } from 'react';
import './index.css'

class BackBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="back-btn btn-before" onClick={this.props.focusFunc}>
        &lt; 返回
      </div>
    )
  };
}

export default BackBtn;