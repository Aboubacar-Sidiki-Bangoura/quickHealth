import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import * as serviceWorker from './serviceWorker';
import QuickHealth from './QuickHealth';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<QuickHealth />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
