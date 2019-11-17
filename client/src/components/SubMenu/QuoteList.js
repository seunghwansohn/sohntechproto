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
     
        }
        
    }

    componentDidMount() {   //컴포넌트가 만들어지고 render가 호출된 이후에 호출되는 메소드
    }
        
    render() {
        //선택된 아이템 값이 하나라도 존재하면 existPicedId는 true, 아니면 false, 기본값은 false
        var existPicked = false;
        if (typeof this.props.picked !== 'undefined' && this.props.picked.length > 0) {
            existPicked = true
        } else {
            existPicked = false
        }

        return(
           <div>
               <br></br>
               Picked Items
               <br></br>
               <br></br>
               <br></br>
               <TableBody>
                    {this.props.picked.map(c=>{return(
                        <TableRow> 
                            <TableCell>{c.id}</TableCell>
                            <TableCell>{c.itemCode}</TableCell>
                            <TableCell>{c.itemName}</TableCell>
                            <TableCell>{c.VnName}</TableCell>
                        </TableRow>
                    );})}
               </TableBody>
               <TableBody>
                    {existPicked == true ? 
                    (this.componentDidMount())
                    : 'Do Teen Stuff' }
               </TableBody>
           </div>
        )
    }
}

export default QuoteList;
