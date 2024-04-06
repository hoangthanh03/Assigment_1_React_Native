import reducerCart from "../reduxcer/reducerCart";
import {configureStore} from "@reduxjs/toolkit"

export default configureStore({
    reducer:{
        listCart:reducerCart
    }
})