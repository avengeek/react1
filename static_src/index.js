// import './test.js';
import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//     'h1',
//     {},
//     'Element',
// );

// const component = <h1>React</h1>;

const component = (innerHTML) => <h1>{ innerHTML }</h1>;

ReactDOM.render(
    component('React - lesson 1'),
    document.getElementById('root'),
);