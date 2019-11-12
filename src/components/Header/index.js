import React from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Container, Cart, Text, Logo, IconCart } from './styles';

export default function AppBar({ navigation }) {
  const cartSize = useSelector(state => {
    return state.cart.length;
  });

  return (
    <Wrapper>
      <Container>
        <Logo />
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Text>{cartSize || 0}</Text>
          <IconCart />
        </Cart>
      </Container>
    </Wrapper>
  );
}
