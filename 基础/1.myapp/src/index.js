
// console.log("hello world kerwin")
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './05-redux'

// ReactDOM.render(
//     // <React.StrictMode>
//         <App/>
//     // </React.StrictMode>
//     ,document.getElementById("root"))


import { Provider } from 'react-redux'
import {store,persistor} from './06-react-redux/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './06-react-redux'
ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
    // </React.StrictMode>
    ,document.getElementById("root"))


// ReactDOM.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"111111111"),document.getElementById("root"))

/*
 jsx == js+xml
*/


