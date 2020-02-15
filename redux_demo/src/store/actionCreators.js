import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_INIT_DATA } from "./actionTypes";
import axios from "axios";

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getInitDataAction = (data) => ({
    type: GET_INIT_DATA,
    data
})

export const getDataFromRemote = () => {
    return (dispatch) => {
        axios.get('https://www.fastmock.site/mock/fa45cc84e05124ffb292d82a1b9b965f/redux/api/data')
            .then(res => {
                const data = res.data
                const action = getInitDataAction(data)

                dispatch(action)
            })
    }
}