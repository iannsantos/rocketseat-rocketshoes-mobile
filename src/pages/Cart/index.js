import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/module/cart/actions';
import { formatPrice } from '../../util/formatPrice';

import {
  Container,
  CartDisplay,
  Product,
  ProductInformations,
  ProductImage,
  ProductTitle,
  Amount,
  ProductAmount,
  ProductSubTotal,
  IconDelete,
  Button,
  EmptyCart,
  TextEmptyCart,
  CartTotal,
  FinishButton,
  TextTotal,
  TextTotalPrice,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state => {
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        console.tron.log(totalSum);
        return totalSum + product.price * product.amount;
      }, 0)
    );
  });

  const dispatch = useDispatch();

  function handleRemoveProduct(id) {
    dispatch(CartActions.removeToCart(id));
  }

  function increment(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmount(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartDisplay>
        {cart.length !== 0 ? (
          cart.map(product => (
            <Product key={product.id}>
              <ProductImage source={{ uri: product.image }} />
              <ProductInformations>
                <ProductTitle>{product.title}</ProductTitle>
                <Amount>
                  <TouchableOpacity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={18}
                      color="#7159c1"
                    />
                  </TouchableOpacity>
                  <ProductAmount>{product.amount}</ProductAmount>
                  <TouchableOpacity onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={18} color="#7159c1" />
                  </TouchableOpacity>
                </Amount>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductInformations>
              <Button onPress={() => handleRemoveProduct(product.id)}>
                <IconDelete />
              </Button>
            </Product>
          ))
        ) : (
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={60} color="#999" />
            <TextEmptyCart>
              Carrinho vazio {'\n'}
              Volte a loja e faça suas compras!
            </TextEmptyCart>
          </EmptyCart>
        )}
      </CartDisplay>
      <CartTotal>
        <FinishButton>
          <Text>FINALIZAR PEDIDO</Text>
        </FinishButton>
        <TextTotal>Total:</TextTotal>
        <TextTotalPrice>{total}</TextTotalPrice>
      </CartTotal>
    </Container>
  );
}
