import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './style.scss';
// import img from './img/room.jpeg';
// console.log(img);
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
import App from './app';
// we now wrap App in a Provider
// <Provider store={store}>
// </Provider>
ReactDOM.render( <App /> , document.getElementById('main'));