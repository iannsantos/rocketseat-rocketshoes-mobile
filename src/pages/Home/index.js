import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { formatPrice } from '../../util/formatPrice';

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
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInformations>
          </Product>
          <ButtonAddCart>
            <Cart>
              <CartQtd>3</CartQtd>
              <CartIcon />
            </Cart>
            <TextAddCart>ADICIONAR AO CARRINHO</TextAddCart>
          </ButtonAddCart>
        </Container>
      ))}
    </ListProducts>
  );
}
