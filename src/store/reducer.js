const defaultStore = {
    inputValue : '123',
    list : [1,2,3],
}

export default (state = defaultStore,action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }
    return state
}