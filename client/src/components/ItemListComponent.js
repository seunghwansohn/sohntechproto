import React, { Component } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Table from '@material-ui/core/Table'; //material-ui의 Table ui를 불러와서 프론트엔드에 쓰이는 모든 테이블 스타일을 이 스타일로 함.
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

//콤포넌트에는
//1. JSX코드와 
//2. 이벤트만 심음

const ItemListComponent = ({no, onIncrease, onDecrease}) => {
    
    return (
        <div>
            this is new ContentWindowHook
            <Table>
            <TableHead>
              <TableCell>No</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Plus</TableCell>
              <TableCell>Minus</TableCell>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell>{no}</TableCell>
                <TableCell>BV1</TableCell>
                <TableCell>Ball Valve 1</TableCell>
                <TableCell> <button onClick = {onIncrease}>+1</button></TableCell>
                <TableCell> <button onClick = {onDecrease}>-1</button></TableCell>
                </TableRow>
                <TableRow>
                <TableCell>{no}</TableCell>
                <TableCell>BV1</TableCell>
                <TableCell>Ball Valve 1</TableCell>
                <TableCell> <button onClick = {onIncrease}>+1</button></TableCell>
                <TableCell> <button onClick = {onDecrease}>-1</button></TableCell>
                </TableRow>
            </TableBody>
            </Table>
        </div>
    )
}

export default ItemListComponent