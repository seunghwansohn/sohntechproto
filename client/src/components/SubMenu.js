import React, { Component } from 'react';
import FindItem from "./SubMenu/FindItem";

class Submenu extends Component{
    constructor(props){           //2-1. State를 선언하는 일반 구문
        super(props);               //2-2. State를 선언하는 일반 구문
        this.state = {              //2-3. State를 선언하는 일반 구문
         subMenuTitle : 'Sohntech Search System'
        }
      }
    render(){
      return (
        <div>
            <h2>{this.props.title}</h2>
            <FindItem subMenuTitle = {this.state.subMenuTitle}/>
        </div>
        // 
      );
    }
  }

export default Submenu;