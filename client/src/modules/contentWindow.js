const INCREASE = "contentWindo/INCREASE"
const DECREASE = "contentWindo/DECREASE"

export const increase = () => ({type : INCREASE})
export const decrease = () => ({type : DECREASE})

const initialState = {
    no: 2
}

function contentWindo(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                no: state.no + 1
            };
        case DECREASE:
            return {
                no: state.no - 1
            };
        default:
            return state;
    }
}

export default contentWindo