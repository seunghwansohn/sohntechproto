/*create-react-app 패키지를 통해 리액트 프로젝트 형성시 기본으로 설치되는 최상위 파일임. 여기다 콤포넌트를 불러와서 html 파일을 형성*/

import React, { Component } from 'react';  //리액트에서 콤포넌트만 불러옴.
import TopBar from "./components/TopBar";   //사용자 정의 콤포넌트 /src/components/TopBar.js 파일에 규정된 콤포넌트를 불러옴. 페이지에서 가장 최상단의 로고등 표시하는 콤포넌트
import ContentWindow from "./components/ContentWindow" //위와 마찬가지로 사용자 정의 콤포넌트. 각 메뉴를 눌렀을 때 그 메뉴의 내용 페이지를 형성하는 콤포넌트 
import TOC from "./components/TOC" //각 메뉴의 내용페이지에서 딱 제목만 보여주는 콤포넌트
import './App.css'; //css 로딩
import QuoteList from "./components/SubMenu/QuoteList";
import ItemListContainer from "./containers/itemListContainer.js"

class App extends Component {   //1-1. APP라는 생성자를 React Component 생성자를 상속하여 만들
  
  constructor(props){           //2-1. State를 선언하는 일반 구문 (APP의 기본적인 프로퍼티를 형성. App.state.스테이트명 의 프로퍼티형성)
    super(props);               //2-2. State를 선언하는 일반 구문 (super는 슈퍼클래스 기본 생성자 접근 구문이라고 함. 그냥 외우고 쓰면 됨)
    this.state = {              //2-3. State를 선언하는 일반 구문
      mode:'read',              //현재 페이지의 '기본성격'을 나타내는 state를 mode라는 이름으로 선언
      selected_content_id:2,     
      toptitle:'Sohntech Management System',
      contents:[
        {id:0, title:'Top Page', desc:'Menus'},
        {id:1, title:'Search Item', desc:'Search Product'},
        {id:2, title:'Projects', desc:'Search Product'}
      ],
      customers:[
        {id:99, KRsupplier:"jj"}
      ],
      pickedItems:[]
    }
  }
  
  pickedItems1 = [];
  componentDidMount() {   //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
    this.callApi()        //json 결과를 저장한 값인 callApi 메소드의 값을 불러와서 customer라는 state의 값을 변경해줌.
    .then(res => this.setState({customers: res}))  //callApi 메소드의 response 값을 customers라는 state로 전달하여 변경
    .catch(err => console.log(err)); //에러값이 나면 콘솔에 해당 에러를 출력
  }
    
  callApi = async () => {    //node.js api 서버를 호출하는 함수. async는 비동기 처리를 위한 것
    const response = await fetch('/api/customers');
    const body = await response.json();  //json 형식으로 받아 body라는 변수에 저장
    return body; //body를 return하여 callApi라는 메소드의 값으로 반환
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState = {};
    nextState[e.target.name] = e.target.value;
  }

  render(){       //render 메소드 안에서 return문 시작 전의 부분에는 "state가 각각 변할시에 처리할 연산"을 규정
    // console.log(this.state.pickedItems)
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
    return (  //실제로 html로 반환할 내용을 여기서 규정
      <div className={App}>
        <TopBar title = {this.state.toptitle}/>   {/* TopBar 콤포넌트에 title이라는 props에 toptitle이라는 state를 전달*/}
        
        {/* TOC는 각 메뉴 출력하는 콤포넌트 */}
        <TOC                                       
            onChangePage={function(id){
              this.setState({
                mode:'read',
                selected_content_id:Number(id)
              });
            }.bind(this)} //bind는 함수 밖의 state에 연결시키기 위한 것. 아주 중요한 자바스크립트 용법
            data={this.state.contents}
        ></TOC>

        <ContentWindow onChangePage= 
          {function(a){
            this.setState({
              pickedItems : a
            });
          }.bind(this)}>
        </ContentWindow>
        
        <QuoteList picked = {this.state.pickedItems} onChangePage=  //contentWindow 콤포넌트에서 삽입 할 때마다 선택된 
          {function(){                                                //아이템의 id값만 pickedItems라는 props로 QuoteList에 전달됨.
            console.log(this.state.pickedItems);                      //pickedItems는 배열로 전달되며 값이 축적됨.
          }.bind(this)}
        ></QuoteList>
        
        <ItemListContainer/>
        

      </div>
    );
  };
}
export default (App);     //1-2. APP라는 콤포넌트를 만들어 밖으로 전달하는 종료 구문.
