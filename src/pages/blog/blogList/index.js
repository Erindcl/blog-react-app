import React, { Component } from 'react';
import BlogItem from '../../../components/blogItem';
import './index.css';

class BlogList extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const listItems = this.props.data.map((item,index) =>
      <BlogItem 
        key={index} 
        userName={item.userName} 
        time={item.time} 
        start={item.start} 
        content={item.content}
        myIndex={index}
        focusFunc={this.props.focusFunc}
      />
    );
    return (
      <div class="blog-list">
        {listItems}
      </div>
    )
  };
}

export default BlogList;