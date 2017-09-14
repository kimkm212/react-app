import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import App from './App';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import reducer from './reducer';

const store = createStore(reducer);

const Index = () => (
    <MultiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MultiThemeProvider>
)

ReactDOM.render(
        <Index/>, document.getElementById('root')
);