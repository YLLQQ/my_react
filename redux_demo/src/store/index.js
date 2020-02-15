import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import reduxThunk from "redux-thunk";

/**
 * 增强函数，使用reduxThunk的场景下，redux-dev-tools仍然生效
 */
const composeEnhancers = () => {
    return window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__({})
        : compose
}

const enhancer = composeEnhancers(applyMiddleware(reduxThunk))

/**
 * store必须唯一，多个store不允许，只能有一个store空间
 * 只有store能改变自己的内容，reducer不能改变
 * reducer必须是纯函数(
 * 如果函数的调用参数相同，则永远返回相同结果。
 * 它不依赖于程序执行期间函数外部任何状态或参数变化，必须只依赖于输入参数。
 * )
 */
const store = createStore(
    reducer,
    applyMiddleware(reduxThunk)
)

export default store;

