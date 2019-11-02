import React, { Component } from 'react';
import FindItem from "./SubMenu/FindItem";
import Projects from "./SubMenu/Projects";

import { thisExpression } from '@babel/types';

class ContentWindow extends Component{
    constructor(props){           //2-1. State를 선언하는 일반 구문
        super(props);               //2-2. State를 선언하는 일반 구문
        this.state = {              //2-3. State를 선언하는 일반 구문
         subMenuTitle : 'Sohntech Search System',
         selectedComponent : Projects
        }
      }
    render(){
      return (
        <div>
            <h2>{this.props.title}</h2>
            <this.state.selectedComponent subMenuTitle = {this.props.title}/>
        </div>
        // 
      );
    }
  }

export default ContentWindow;