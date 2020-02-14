import { createStore } from 'redux';
import reducer from './reducer'

const store = createStore(
    reducer,
    /* 如果windows有__REDUX_DEVTOOLS_EXTENSION__，则调用 */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;

