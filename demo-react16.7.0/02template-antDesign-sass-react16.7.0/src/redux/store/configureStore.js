import { createStore } from 'redux';
import rootReducer from 'redux/reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        // 触发chrome下的react开发工具，react-devtools，redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store;
}