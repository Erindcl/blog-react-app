import React, { Component } from 'react';
import BlogItem from '../../../components/blogItem';
import './index.css';
import { connect } from "react-redux";
// import * as global  from "../global/action";

class BlogList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        startArr: []
      }
  }

  componentDidMount() {
    // const action = { type: 'SET_START_NUM', plyload: [2,7,9,4,3] }
    
    // this.props.startNum(action)
    // console.log(this.state.startArr);
    // this.state.startArr = this.props.start;
    this.setState({startArr: this.props.start});
  }

  render() {
    const starList = this.state.startArr;
    console.log(starList)
    const listItems = this.props.data.map((item,index) =>
      <BlogItem 
        key={index} 
        userName={item.userName} 
        time={item.time} 
        start={ this.state.startArr[index] } 
        content={item.content}
        myIndex={index}
        focusFunc={this.props.focusFunc}
      />
    );
    return (
      <div class="blog-list">
        {this.props.start}
        {listItems}
      </div>
    )
  };
}

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
export default connect(mapStateToProps,mapDispatchToProps)(BlogList);
// export default BlogList;