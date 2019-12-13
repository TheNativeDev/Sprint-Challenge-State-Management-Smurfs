import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURFS_SUCCESS} from '../actions/index'

const smurfState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = smurfState, action) => {
switch(action.type) {
    case FETCHING_SMURFS_START:
        return {
            ...state,
            isFetching: true
        }
    case FETCHING_SMURFS_SUCCESS: 
    return {
        ...state,
        smurfs: action.payload.data,
        isFetching: false,
        error: ''
    }
    case FETCHING_SMURFS_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.payload.error
        }
    case ADDING_SMURFS_SUCCESS:
        return {
            ...state,
            smurfs: action.payload.data
        }
        default:
            return state
}
}