import React, { Component } from 'react';
import TopBar from "./components/TopBar";
import SubMenu from "./components/SubMenu";
import ContentWindow from "./components/ContentWindow"
import TOC from "./components/TOC"
import './App.css';

class App extends Component { 
  constructor(props){           //2-1. State를 선언하는 일반 구문
    super(props);               //2-2. State를 선언하는 일반 구문
    this.state = {              //2-3. State를 선언하는 일반 구문
      mode:'read',              //현재 페이지의 기본성격을 mode라는 state로 변수화
      selected_content_id:2,
      toptitle:'Sohntech Management System',
      contents:[
        {id:0, title:'Top Page', desc:'Menus'},
        {id:1, title:'Search Item', desc:'Search Product'},
        {id:2, title:'Projects', desc:'Search Product'}
      ]
    }
  }

  render(){
    var _title, _desc = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
      <TopBar title = {this.state.toptitle}/>
      <TOC 
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
      ></TOC>
      <ContentWindow title={_title} desc={_desc}></ContentWindow>
      
      
      </div>
  );
}
}

export default App;
