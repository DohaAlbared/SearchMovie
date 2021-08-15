// this is the reducer file

const UpdateReducer=(state= {movie :{}}, action)=>{
    switch(action.type){
        case "update":
            return{ ...state, movie: action.payload} 
        default:
            return state
    }

}

export default UpdateReducer