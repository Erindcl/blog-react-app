import React, { Component } from 'react';
import './index.css';

class OneItem extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div class="one-item">
        <div class="one-item-top">
          <span>{ this.props.userName }</span>
          <span>{ this.props.time }</span>
          <span>{ this.props.start }个赞</span>
        </div>
        <div class="one-item-content">
          { this.props.content }
        </div>
        
      </div>
    )
  };
}

export default OneItem;