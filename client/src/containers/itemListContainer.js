import React from 'react';
import {connect} from 'react-redux';
import {increase, decrease} from '../modules/contentWindow'
import ItemListComponent from '../components/ItemListComponent'

//콘테이너에는 이렇게
//1. app.js에 export 시킬 기본 ContainerComponent와 
const ItemListContainer = ({no, increase, decrease}) => {
    return (
        <div>
            this is new ContentsWindowContainer
            <ItemListComponent no={no} onIncrease={increase} onDecrease={decrease}>sdfsdf </ItemListComponent>
        </div>
    )
}
//2. 순수 Component로부터 module을 거쳐 dispatch 받았을 때 어떤 state 변화 요청을 변할지를 규정
const mapStateToProps = state => ({
    no: state.contentWindow.no,
})
const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
        console.log('increase')
    },
    decrease: () => {
        dispatch(decrease());
        console.log('decrease')
    }
})
//connect 함수는 리덕스와 컨테이너를 연결하는 핵심. 
//mapStateToProps는 store의 state를 컴포넌트에서 받는 함수,
//mapDispatchToProps는 액션 생성함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ItemListContainer)