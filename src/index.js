import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import './config/reactotron';
import Routes from './routes';
import store from './store';

// import { Container } from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Provider>
  );
}
