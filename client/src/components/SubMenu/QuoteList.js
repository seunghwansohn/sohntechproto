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
            ItemCode : '',
            ItemName : ''
        }
    }
    render() {
        return(
           <div>
               Picked Items
               <TableBody>
                <TableRow>
                  <TableCell> {this.state.id} </TableCell> 
                  <TableCell> {this.props.id} </TableCell> 
                  <TableCell> {this.itemName} </TableCell> 
                </TableRow>
               </TableBody>
           </div>
        )
    }
}

export default QuoteList;
