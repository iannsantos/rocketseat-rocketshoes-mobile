import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Cart, Text } from './styles';
import logo from '../../assets/logo.png';

export default function AppBar() {
  return (
    <Container>
      <Image source={logo} />
      <Cart>
        <Text>3</Text>
        <Icon name="shopping-cart" size={25} color="#fff" />
      </Cart>
    </Container>
  );
}
