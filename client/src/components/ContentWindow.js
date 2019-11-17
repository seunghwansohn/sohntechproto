import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table'; //material-ui의 Table ui를 불러와서 프론트엔드에 쓰이는 모든 테이블 스타일을 이 스타일로 함.
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


//시작-검색창 및 최상단 바 스타일 부분 (필수)
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});
//끝- 검색창 및 최상단 바 스타일 부분 (필수)




class ContentWindow extends Component{
    constructor(props){           //2-1. State를 선언하는 일반 구문
        super(props);               //2-2. State를 선언하는 일반 구문
        this.state = {              //2-3. State를 선언하는 일반 구문
         matchedidResult : [],
         customers : 
          [
          {id:99, KRsupplier:"jj"} //이 초기값 설정 안해주면 이상하게 에러남. 후에 처리 요망
          ]
        }
    }

//시작 - SQL에서 모든 값 받아다가 customers라는 state에 저장하기 위한 메소드
    componentDidMount() {   //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
      this.callApi1()        //json 결과를 저장한 값인 callApi 메소드의 값을 불러와서 customer라는 state의 값을 변경해줌.
      .then(res => this.setState({customers: res}))  //callApi 메소드의 response 값을 customers라는 state로 전달하여 변경
      .catch(err => console.log(err)); //에러값이 나면 콘솔에 해당 에러를 출력
    }
      
    callApi1 = async () => {    //node.js api 서버를 호출하는 함수. async는 비동기 처리를 위한 것
      const response = await fetch('/api/customers');
      const body = await response.json();  //json 형식으로 받아 body라는 변수에 저장
      return body; //body를 return하여 callApi라는 메소드의 값으로 반환
    }
//끝    

    willInputItems = [];

    inputItem = function (f){
      this.willInputItems.push(f);
    }

    //시작 - 동빈나에서 받아온 검색창 구현 코드 중 일부. 
    handleValueChange = (e) => {
      let nextState = {};
      nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }
    //끝

    render(){
      var result = [];
      const filteredComponents = (data) => {    //이 함수의 실행결과를 통해 map을 통해 반복된 콤포넌트를 최종 리턴문 안에 삽입
        var matchedid = [];
        var searchKeyword = this.state.searchKeyword
        var processed = data.map (function(num) {
          var values = Object.values(num);
          var joinedString = values.join(',');
          var trueSearched = joinedString.indexOf(searchKeyword) > - 1;
          if (trueSearched === true) {
            matchedid.push(num.id);     //matchedid라는 미리 선언된 배열변수에, 검색어를 포함한 아이템들의 id값만 담음.
          }
        })
        var returnWords = function(){
          var matchedData = [];
          var findDataId = '';
              for (var i=0; i < matchedid.length; i++){
                findDataId = matchedid[i];
                function searchMatchedData(id, data) {
                  for (var i = 0; i < data.length; i++) {
                    if (data[i].id === id)  {
                      return data[i];
                    }
                  }
                }
                result.push(searchMatchedData(findDataId, data))
     
                matchedData.push(data[matchedid[i]])
              }
          return result;
        }
        var temporary = returnWords();
        return temporary.map((c) => {return(
            <TableRow>
              <TableCell> {c.id} </TableCell> 
              <TableCell> {c.itemCode} </TableCell> 
              <TableCell> {c.itemName} </TableCell>
              <TableCell> <button onClick= {function(e){
                e.preventDefault();
                this.inputItem(c);
                this.props.onChangePage(this.willInputItems);
              }.bind(this)}>삽입</button></TableCell> 
            </TableRow>
        );})
      }
      
      // console.log(filteredComponents(this.state.customers))

      const { classes } = this.props;
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                고객 관리 시스템
              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="검색하기"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  name="searchKeyword"
                  value={this.state.searchKeyword}
                  onChange={this.handleValueChange}
                />
              </div>
            </Toolbar>
        </AppBar>
          <Table>
            <TableHead>
              <TableCell>No</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Item</TableCell>
            </TableHead>
            <TableBody>
                  {this.state.searchKeyword ?
                    // <TableRow></TableRow>
                    filteredComponents(this.state.customers) :
                      <TableRow>
                        <TableCell> {this.state.customers[0].id} </TableCell> 
                          <TableCell> <button onClick= {function(e){
                              e.preventDefault();
                              this.inputItem(this.state.customers[0]);
                              this.props.onChangePage(this.willInputItems);
                            }.bind(this)}>삽입</button></TableCell> 
                      </TableRow>}
            </TableBody>
          </Table>
        </div>
        // `
      );
    }
  }

export default withStyles(styles)(ContentWindow); 