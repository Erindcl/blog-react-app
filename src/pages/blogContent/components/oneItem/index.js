import React, { Component } from 'react';
import './index.css';

class OneItem extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="one-item">
        <div className="one-item-top">
          <span>{ this.props.userName }</span>
          <span>{ this.props.time }</span>
          <span>{ this.props.start }个赞</span>
        </div>
        <div className="one-item-content">
          { this.props.content }
        </div>
        
      </div>
    )
  };
}

export default OneItem;