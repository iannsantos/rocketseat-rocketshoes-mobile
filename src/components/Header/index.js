import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Wrapper, Container, Cart, Text, Logo, IconCart } from './styles';

export default function AppBar({ navigation }) {
  const cartSize = useSelector(state => {
    return state.cart.length;
  });

  return (
    <Wrapper>
      <Container>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Logo />
        </TouchableOpacity>
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Text>{cartSize || 0}</Text>
          <IconCart />
        </Cart>
      </Container>
    </Wrapper>
  );
}
