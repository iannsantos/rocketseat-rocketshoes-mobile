import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  /* align-items: center; */

  background: #222;
  width: 100%;
  height: 100%;
`;

export const ListProducts = styled.ScrollView``;

export const Product = styled.View`
  display: flex;
  flex-direction: column;

  background: #fff;
  width: 250px;
  height: 350px;
  border-radius: 4px;
  margin: 20px 10px;
  padding: 12px 8px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 100%;
`;

export const ProductName = styled.Text`
  color: #666;
  line-height: 20;
  font-size: 16px;
  font-weight: bold;
  margin-top: 6px;
`;

export const ProductPrice = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-top: 4px;
`;

export const ButtonAddCart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  background: #7159c1;
  border-radius: 4px;
  margin-top: auto;
`;

export const Cart = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 6px;
  background: rgba(0, 0, 0, 0.1);
`;

export const CartIcon = styled(Icon).attrs({
  name: 'shopping-cart',
  size: 15,
  color: '#fff',
})``;

export const CartQtd = styled.Text`
  font-size: 14px;
  margin-right: 4px;
  color: #fff;
`;

export const TextAddCart = styled.Text`
  padding-left: 10px;
  color: #fff;
  font-weight: bold;
`;
