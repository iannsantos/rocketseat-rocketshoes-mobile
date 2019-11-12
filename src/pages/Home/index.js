import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';
import * as CartActions from '../../store/module/cart/actions';

import {
  Container,
  ListProducts,
  Product,
  ProductImage,
  ProductInformations,
  ProductName,
  ProductPrice,
  ButtonAddCart,
  Cart,
  CartIcon,
  CartAmount,
  TextAddCart,
} from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddCart(product) {
    dispatch(CartActions.addToCart(product));
    navigation.navigate('Cart');
  }

  return (
    <ListProducts>
      {products.map(product => (
        <Container key={product.id}>
          <Product>
            <ProductImage
              source={{
                uri: product.image,
              }}
            />
            <ProductInformations>
              <ProductName>{product.title}</ProductName>
              <ProductPrice>{product.priceFormated}</ProductPrice>
            </ProductInformations>
          </Product>
          <ButtonAddCart onPress={() => handleAddCart(product)}>
            <Cart>
              <CartAmount>{amount[product.id] || 0}</CartAmount>
              <CartIcon />
            </Cart>
            <TextAddCart>ADICIONAR AO CARRINHO</TextAddCart>
          </ButtonAddCart>
        </Container>
      ))}
    </ListProducts>
  );
}
