import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter } from 'react-router-dom';
import App from './App';


import reducer from './reducer';

const store = createStore(reducer);

const Index = () => (

  <Provider store={store}>
      <MultiThemeProvider>
          <BrowserRouter>
              <App/>
          </BrowserRouter>
      </MultiThemeProvider>
  </Provider>

);

ReactDOM.render(
        <Index/>, document.getElementById('root')
);