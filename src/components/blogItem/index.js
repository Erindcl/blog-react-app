import React, { Component } from 'react';
import './index.css';

class BlogItem extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
    <div class="blog-item" myindex={this.props.myIndex}>
        <div class="blog-item-top">
          <span onClick={this.props.focusFunc}>{ this.props.userName }</span>
          <span>{ this.props.time }</span>
          <span>{ this.props.start }个赞</span>
        </div>
        <div class="blog-item-content hidden-content">
          { this.props.content }
        </div>
        
      </div>
    )
  };
}

export default BlogItem;