import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
        // headerStyle: {
        //   backgroundColor: '#7159c1',
        // },
      }),
    }
  )
);

export default Routes;
