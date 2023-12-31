const reducer = (state, action) => {

    switch(action.type){
        case 'GET_DATA':
            return {  ...state ,  products : action.payload , filteredData : action.payload }

        case 'GET_SINGLE':
            return {...state , singleProduct : action.payload }

        case 'FILTER':
            // eslint-disable-next-line no-case-declarations
            let filterData = state.products.filter((item) => {
                return item.category === action.payload })
            return { ...state , filteredData : filterData }

        case 'SORT_ASC' :
                // eslint-disable-next-line no-case-declarations
                const sortedArray = state.filteredData.sort((a, b) => {
                    return a.price - b.price
                })
                return { ...state , filteredData : sortedArray }
                
        case 'SORT_DSC' :
                // eslint-disable-next-line no-case-declarations
                const sortArray = state.filteredData.sort((a, b) => {
                    return b.price - a.price
                })
                return { ...state , filteredData : sortArray }
            
        default : 
            return state
        }




    
};

export default reducer;
