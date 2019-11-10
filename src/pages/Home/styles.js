import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ListProducts = styled.ScrollView`
  background: #222;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;

  background: #fff;
  height: 200px;
  border-radius: 4px;
  margin: 14px 12px 0 12px;
  padding: 10px;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ProductInformations = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  margin-left: 6px;
`;

export const ProductImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const ProductName = styled.Text`
  color: #666;
  font-size: 16px;
  font-weight: bold;
  flex-wrap: nowrap;
`;

export const ProductPrice = styled.Text`
  color: #333;
  font-size: 24px;
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
