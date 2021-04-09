import './styles/app.scss';

import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/index';

const mountNode = document.getElementById('app-container');

ReactDOM.render(<App />, mountNode);
