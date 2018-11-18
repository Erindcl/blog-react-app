import React, { Component } from 'react';
import './index.css';

class ZanBtn extends Component {
  constructor(props) {
      super(props);
      this.state = {isClick: false};
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    if (!this.state.isClick) {
      this.props.addStartFunc();
    }
    this.setState({isClick: true});
  }

  render() {
    return (
      <div onClick={this.handleClick} class="zan-btn btn-before"
      className={["zan-btn", this.state.isClick?"btn-after":"btn-before"].join(' ')}>
        点赞
      </div>
    )
  };
}

export default ZanBtn;