import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_INIT_DATA } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
}

export default (state = defaultState, action) => {

    // Reducer只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))

        newState.inputValue = action.value

        return newState
    }

    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))

        newState.list.push(newState.inputValue)
        newState.inputValue = ''

        return newState
    }

    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))

        newState.list.splice(action.index, 1)

        return newState
    }

    if (action.type === GET_INIT_DATA) {
        let newState = JSON.parse(JSON.stringify(state))
        
        newState.inputValue=action.data.inputValue
        newState.list=action.data.list

        return newState
    }

    return state
}