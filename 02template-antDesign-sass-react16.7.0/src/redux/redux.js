// import { createStore } from 'redux'

// /**
//  * This is a reducer, a pure function with (state, action) => state signature.
//  * It describes how an action transforms the state into the next state.
//  *
//  * The shape of the state is up to you: it can be a primitive, an array, an object,
//  * or even an Immutable.js data structure. The only important part is that you should
//  * not mutate the state object, but return a new object if the state changes.
//  *
//  * In this example, we use a `switch` statement and strings, but you can use a helper that
//  * follows a different convention (such as function maps) if it makes sense for your
//  * project.
//  */
// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// let store = createStore(counter)

// // You can use subscribe() to update the UI in response to state changes.
// // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// // However it can also be handy to persist the current state in the localStorage.

// store.subscribe(() => console.log(store.getState()))

// // The only way to mutate the internal state is to dispatch an action.
// // The actions can be serialized, logged or stored and later replayed.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1

// ------------------------------------------

// import { createStore, combineReducers, applyMiddleware } from 'redux'

// function user(state = {name: 'redux'}, action) {
//   switch (action.type) {
//     case 'CHANGE_USER_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//   }

//   return state
// }

// function project(state = {name: 'min-react'}, action) {
//   switch (action.type) {
//     case 'CHANGE_PROJECT_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//   }

//   return state
// }


// var rootReducer = combineReducers({
//   user,
//   project
// })

// var store = createStore(rootReducer)

// console.log(store.getState());

// // store.subscribe 触发视图更新
// // store.subscribe(function() {
// //   render()
// // })

// // store.dispatch 发出action
// store.dispatch({
//   type: 'CHANGE_USER_NAME',
//   name: 'reduxxxx'
// })

// console.log(store.getState());

// 异步操作

// ------------------------------------------

// const ADD_TODO = 'ADD_TODO';

// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }

// ------------------------------------------

