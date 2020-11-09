const reducer = (state,action) => {

  switch(action.type){

    case 'SET_PHOTOS':

      return {
        ...state,
        photos : action.payload
      }
    case 'SET_LOADING':

      return {
        ...state,
        isLoading : action.payload
      }

    case 'SET_PAGES':

      return {
        ...state,
        actualPage : action.payload.actualPage,
        totalPages : action.payload.totalPages
      }

    case 'SET_TEXT':

      return {
        ...state,
        text : action.payload,
      }
    case 'SET_COLOR':

      return {
        ...state,
        color : action.payload,
      }

      
    default: return state;

  }

}
export default reducer;
