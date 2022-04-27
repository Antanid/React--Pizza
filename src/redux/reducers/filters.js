const initianalState = {
    sortBy: 'popular',
    category: 0,
};

const filters = (state = initianalState, action) => {
    if (action.type === 'SERT_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if (action.type === 'SERT_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        }
    }
    return state
}


export default filters;