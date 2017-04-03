const Game = require('./components/Game');
const React = require('react')
const ReactDOM = require('react-dom');

const $main = document.getElementById('main');
ReactDOM.render(<Game className='game'/>, $main);

require('./test/index-test.js'); // Leave this in!
