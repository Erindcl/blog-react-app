import React, { Component } from 'react';
import NavBar from '../../components/navBar';
import OneItem from './components/oneItem';
import BackBtn from './components/backBtn';
import ZanBtn from './components/zanBtn';
import './index.css';

class BlogContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="blog-content">
        {/* <NavBar text="博客" /> */}
        <div class="blog-content-center">
          <div class="btn-box">
            <BackBtn focusFunc={this.props.focusFunc} />
            <ZanBtn addStartFunc={this.props.addStartFunc} />
          </div>
          <OneItem 
            userName={this.props.data.userName} 
            time={this.props.data.time} 
            start={this.props.data.start}
            content={this.props.data.content}
          />
        </div>
      </div>
    )
  };
}

export default BlogContent;