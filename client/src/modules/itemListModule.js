const INCREASE = "itemListModule/INCREASE"
const DECREASE = "itemListModule/DECREASE"

export const increase = () => ({type : INCREASE})
export const decrease = () => ({type : DECREASE})

const initialState = {
    no: 2
}

function itemListModule(state = initialState, action) {
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
export default itemListModule