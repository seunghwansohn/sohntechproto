import React from 'react';
import { post } from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table'; //material-ui의 Table ui를 불러와서 프론트엔드에 쓰이는 모든 테이블 스타일을 이 스타일로 함.
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.id,
            // ItemCode : '',
            ItemName : '',
            ki : [
                {id:99, ItemCode : 33, ItemName : '22'}
            ]
        }
    }

    componentDidMount() {   //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
        // .then(res => this.setState({customers: res}))  //callApi 메소드의 response 값을 customers라는 state로 전달하여 변경
        // .catch(err => console.log(err)); //에러값이 나면 콘솔에 해당 에러를 출력
        var ki = ''
    }
        
    callApi = async (Id) => {    //node.js api 서버를 호출하는 함수. async는 비동기 처리를 위한 것
        let searchString = '/query/' + Id
        const response = await fetch(searchString);
        const body = await response.json();  //json 형식으로 받아 body라는 변수에 저장
        return body;
        // return body; //body를 return하여 callApi라는 메소드의 값으로 반환
    }

    pickedArr = [];
    pickedNo = [];
    json = [];
    
    temptemp = function () {
            this.props.pickedID.map((c) => {
            console.log(c)
            
            this.makeTemplate(c);

            return (
                <TableRow>
                    {/* <TableCell>{this.pickedArr[c].id}</TableCell>
                    <TableCell>{this.pickedArr[c].itemCode}</TableCell>
                    <TableCell>{this.pickedArr[c].itemName}</TableCell> */}
                </TableRow>)
    })}
            // )
    
    makeTemplate(id){
        this.callApi(id)
        .then(res => {this.ki = res[0]
            // console.log(this.ki[0].itemName)
        })
        .catch(err => console.log(err))
    }

    render() {
        //선택된 아이템 값이 하나라도 존재하면 existPicedId는 true, 아니면 false, 기본값은 false
        var existPickedId = false;
        if (typeof this.props.pickedID !== 'undefined' && this.props.pickedID.length > 0) {
            existPickedId = true
        } else {
            existPickedId = false
        }
        
        this.makeTemplate(1)
        var iii = this.ki
        console.log(iii)

        return(
           <div>
               <br></br>
               Picked Items
               <br></br>
               <br></br>
               <br></br>
               <TableBody>
                    {this.props.pickedID.map(c=>{return(
                        <TableRow> 
                            <TableCell>{c}</TableCell>
                            <TableCell>{c}</TableCell>
                            <TableCell>{c}</TableCell>
                            <TableCell>{c}</TableCell>
                        </TableRow>
                    );})}
               </TableBody>
               <TableBody>
                    {existPickedId == true ? 
                    // (this.temptemp())
                    'dl'
                    : 'Do Teen Stuff' }
               </TableBody>
           </div>
        )
    }
}

export default QuoteList;
