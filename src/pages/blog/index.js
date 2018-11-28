import React, { Component } from 'react';
import NavBar from '../../components/navBar';
import BlogList from './blogList';
import BlogContent from '../blogContent';
import BlogsData from '../../blogsData';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {nowShowIndex: -1, blogsData: BlogsData, value: 'hhh'};
    this.addStart = this.addStart.bind(this);
    this.focusItem = this.focusItem.bind(this);
  }

  componentDidMount() {
    const action = { type: 'SET_START_NUM', plyload: [2,7,9,4,3] }
    
    // this.props.startNum(action)
    // console.log(this.props.startNum(action));
    // const temBlogsData = this.state.blogsData;
    // const temIndex = this.state.nowShowIndex;
    // this.setState({nowShowIndex: temIndex, blogsData: temBlogsData, value: 'yyy'});
    // console.log("初始化时候的state");
    // console.log(this.state.value);
    console.log(this.props);
  }

  // componentDidUpdate() {
  //   // console.log("修改后的state");
  //   // console.log(this.state.value);
  //   console.log(this.props.start);
  // }

  addStart (e) {
    // console.log(111)
    const temBlogsData = this.state.blogsData;
    const temIndex = this.state.nowShowIndex;
    temBlogsData[temIndex].start += 1;
    // console.log(temBlogsData[temIndex].start);
    this.setState({nowShowIndex: temIndex, blogsData: temBlogsData});
  }

  focusItem (e) {
    // console.log(e.target.parentNode.parentNode.getAttribute('myindex'));
    var temIndex = e.target.parentNode.parentNode.getAttribute('myindex');
    if (temIndex === null) {
      temIndex = -1;
    }
    const temBlogsData = this.state.blogsData;
    this.setState({nowShowIndex: temIndex, blogsData: temBlogsData});
  }

  render() {
    const bLElement = <BlogList 
    focusFunc={this.focusItem} 
      data={this.state.blogsData} 
    />;
    const bCElement = <BlogContent 
      focusFunc={this.focusItem} 
      addStartFunc={this.addStart} 
      data={this.state.blogsData[this.state.nowShowIndex]}
      myIndex={this.state.nowShowIndex}
    />;
    // const childCom = bCElement;
    const childCom = this.state.nowShowIndex === -1 ? bLElement : bCElement;
    return (
      <div>
        <div>{this.props.start}</div>
        <NavBar 
          text="博客" 
        />
        {childCom}
      </div>
    )
  };
}


export default Blog;