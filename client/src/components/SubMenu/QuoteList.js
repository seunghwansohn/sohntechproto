import React from 'react';
import { post } from 'axios';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table'; //material-ui의 Table ui를 불러와서 프론트엔드에 쓰이는 모든 테이블 스타일을 이 스타일로 함.
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';


var myApp = {};

myApp.values = {
    'pickedArr1' : null
}
class QuoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id : this.props.id,
            // ItemCode : '',
            ItemName : '',
            ki : [
                {id:99, ItemCode : 33, ItemName : '22'},
            ],
            pickedIdState : []
        }
        
    }

    arrr = [];
    componentDidMount() {   //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
    }
        
    callApi = function(id) {
        var api = async () => {    //node.js api 서버를 호출하는 함수. async는 비동기 처리를 위한 것
            let searchString = '/query/' + id
            const response = await fetch(searchString);
            const body = await response.json();  //json 형식으로 받아 body라는 변수에 저장
            return body;
        }
        return api();
    }

    makeTemplate = function(id){
        return function(i) {
            this.callApi(i)
            .then(res => this.ki = res[0])
            .catch(err => console.log(err))
            return this.ki
        }
    }();

    render() {
        //선택된 아이템 값이 하나라도 존재하면 existPicedId는 true, 아니면 false, 기본값은 false
        var existPickedId = false;
        if (typeof this.props.pickedID !== 'undefined' && this.props.pickedID.length > 0) {
            existPickedId = true
        } else {
            existPickedId = false
        }
        
        this.arrr.push(this.makeTemplate(1))
        console.log(this.arrr)
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
                    (this.componentDidMount())
                    : 'Do Teen Stuff' }
               </TableBody>
           </div>
        )
    }
}

export default QuoteList;
