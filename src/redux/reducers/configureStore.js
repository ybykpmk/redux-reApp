import {createStore} from "redux"

import reducers from "./index"
import { createStoreHook } from "react-redux"

export default function configureStore(){
    return createStore(reducers);
}
