const setSortBy = (name) => ({
    type: 'SERT_SORT_BY',
    payload: name,
});


const setCategory = (catIndex) => ({
    type: 'SERT_CATEGORY',
    payload: catIndex,
});