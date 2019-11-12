import React from 'react';
import { TouchableOpacity } from 'react-native';
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
  FinishText,
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
    // let totalSum = 0;
    return formatPrice(
      // state.cart.map(product => {
      //   totalSum += product.price * product.amount;
      // });
      // console.tron.log(totalSum);
      state.cart.reduce((totalSum, product) => {
        console.tron.log(product.price * product.amout);
        return totalSum + product.price * product.amount;
      }, 0)
    );
    // return formatPrice(totalSum);
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
        {cart.length === 0 ? (
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={60} color="#999" />
            <TextEmptyCart>
              Carrinho vazio {'\n'}
              Volte a loja e faça suas compras!
            </TextEmptyCart>
          </EmptyCart>
        ) : (
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
                  <Button onPress={() => handleRemoveProduct(product.id)}>
                    <IconDelete />
                  </Button>
                </Amount>
                <ProductSubTotal>{product.subtotal}</ProductSubTotal>
              </ProductInformations>
            </Product>
          ))
        )}
        <CartTotal>
          <FinishButton>
            <FinishText>FINALIZAR PEDIDO</FinishText>
          </FinishButton>
          <TextTotal>Total:</TextTotal>
          <TextTotalPrice>{total}</TextTotalPrice>
        </CartTotal>
      </CartDisplay>
    </Container>
  );
}
