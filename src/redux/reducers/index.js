import { combineReducers } from "redux"

import errorReducer from "./errorReducer"
import movieReducer from "./errorReducer"

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer
})

export default rootReducers