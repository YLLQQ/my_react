const defaultState = {
    inputValue: '写点什么',
    list: [
        '数据一',
        '数据二',
        '数据三'
    ]
}

export default (state = defaultState, action) => {

    console.log(state, action)

    // Reducer只能接收state，不能改变state
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))

        newState.inputValue = action.value

        return newState
    }

    return state
}