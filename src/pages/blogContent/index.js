import React, { Component } from 'react';
import NavBar from '../../components/navBar';
import OneItem from './components/oneItem';
import BackBtn from './components/backBtn';
import ZanBtn from './components/zanBtn';
import './index.css';
import { connect } from "react-redux";
import * as global  from "../global/action";

class BlogContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flg: false
    };
    this.handlAddStart = this.handlAddStart.bind(this);
  }

  componentDidMount() {
    console.log(this.props.start);
    console.log(this.props);
    const action = { type: 'SET_START_NUM', plyload: [8,7,4,5,3] };
      console.log(action)
      // action.plyload[1]++;
      // console.log(action)
      this.props.startNum(action);
  }

  handlAddStart () {
    // if (flg) {
      const nowIndex = this.props.myIndex;
      console.log(nowIndex)
      const action = { type: 'SET_START_NUM', plyload: this.props.start };
      console.log(action)
      action.plyload[nowIndex]++;
      console.log(action)
      this.props.startNum(action);
      console.log("状态更新完成")
    // }
  }

  render() {
    return (
      <div className="blog-content">
        {/* <NavBar text="博客" /> */}
        <div>{this.props.start}</div>
        <div className="blog-content-center">
          <div onClick={this.handlAddStart}>hhh</div>
          <div className="btn-box">
            <BackBtn focusFunc={this.props.focusFunc} />
            <ZanBtn addStartFunc={this.handlAddStart} startNum={this.props.startNum} start={this.props.start} myIndex={this.props.myIndex} />
          </div>
          <OneItem 
            userName={this.props.data.userName} 
            time={this.props.data.time} 
            // start={this.props.start[this.props.myIndex]}
            content={this.props.data.content}
          />
        </div>
      </div>
    )
  };
}

// export default BlogContent;

const mapStateToProps = (state) => {
  return ({
    start: state.startNum
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    startNum: (...args) => dispatch(...args)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogContent);