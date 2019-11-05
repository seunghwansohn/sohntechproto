import React from 'react';
import { post } from 'axios';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            ItemCode: '',
            ItemName: ''
        }
    }
    render() {
        return(
            <form onSubmit = {this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필이미지 <input type = "file" name = "file" file={this.state.file}></input>
            </form>//onsubmit : form 태그 안에서 form전송을 하기 전에 입력된 데이터의 유효성을 체크하기 위해 사용하는 이벤트. HTML태그임.
        )//https://medium.com/@kris101/react-file-upload-the-easy-way-with-nodejs-e94c5e81fb8 -> handleFileChange참조
    }
}

export default AddItem;
