import React, { Component } from 'react';
import TopTitle from "./components/TopTitle"
import './App.css';

class App extends Component { 
  constructor(props){           //2-1. State를 선언하는 일반 구문
    super(props);               //2-2. State를 선언하는 일반 구문
    this.state = {              //2-3. State를 선언하는 일반 구문
      mode:'read',              //현재 페이지의 기본성격을 mode라는 state로 변수화
      toptitle:'Sohntech Management System',
      subject:{title:'WEB', sub:'World Wid Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
      ]
    }
  }
  render(){
  console.log('됐음');
  return (
    <div className="App">
     <TopTitle title = {this.state.toptitle}/>
    </div>
  );
}
}

export default App;
