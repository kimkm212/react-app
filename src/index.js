import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import App from './App';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Index = () => (
    <MultiThemeProvider>
        <App/>
    </MultiThemeProvider>
)

ReactDOM.render(
        <Index/>, document.getElementById('root')
);