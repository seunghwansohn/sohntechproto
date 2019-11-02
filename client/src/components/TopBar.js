import React, { Component } from 'react';

class TopBar extends Component{
    render(){
      return (
        <article>
            <h1>{this.props.title}</h1>
        </article>
      );
    }
  }

export default TopBar;