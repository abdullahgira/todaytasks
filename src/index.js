import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers"
import { loadState, saveState } from "./local-storage"

import "./general-style.css"

const persistedState = loadState()
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveState({
        tasks: store.getState().tasks,
    })
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
