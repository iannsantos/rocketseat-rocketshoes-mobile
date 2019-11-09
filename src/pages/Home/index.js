import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';

import {
  Container,
  ListProducts,
  Product,
  ProductImage,
  ProductName,
  ProductPrice,
  ButtonAddCart,
  Cart,
  CartIcon,
  CartQtd,
  TextAddCart,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      // const data = response.data.map(product => ({
      //   ...product,
      //   priceFormated: formatPrice(product.price),
      // }));
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      <ListProducts horizontal>
        {products.map(product => (
          <Product key={product.id}>
            <ProductImage
              source={{
                uri: product.image,
              }}
            />
            <ProductName>{product.title}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <ButtonAddCart>
              <Cart>
                <CartQtd>3</CartQtd>
                <CartIcon />
              </Cart>
              <TextAddCart>ADICIONAR AO CARRINHO</TextAddCart>
            </ButtonAddCart>
          </Product>
        ))}
      </ListProducts>
    </Container>
  );
}
