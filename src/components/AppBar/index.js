import React from 'react';
import { useSelector } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Cart, Text } from './styles';
import logo from '../../assets/logo.png';

export default function AppBar() {
  const cartSize = useSelector(state => {
    return state.cart.length;
  });

  return (
    <Container>
      <Image source={logo} />
      <Cart>
        <Text>{cartSize}</Text>
        <Icon name="shopping-cart" size={25} color="#fff" />
      </Cart>
    </Container>
  );
}
