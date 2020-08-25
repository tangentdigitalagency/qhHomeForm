import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';
require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
