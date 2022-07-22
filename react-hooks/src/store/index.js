import {reducer} from './reducers/index'
import { numberAdd2 } from './actions'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    initialState,
    reducer,
    numberAdd2
}