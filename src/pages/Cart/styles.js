import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222;
  height: 100%;
  width: 100%;
`;

export const CartDisplay = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 95%;
  margin: 14px 12px 0 12px;
  padding: 12px;
  border-radius: 4px;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgba(9, 9, 9, 0.1);
  margin-bottom: 6px;
`;

export const ProductInformations = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  padding: 4px;
  margin: 0 6px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  color: #666;
`;

export const Amount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-evenly; */
  margin: 6px 0;
`;

export const ProductAmount = styled.TextInput.attrs({
  editable: false,
})`
  color: #000;
  text-align: center;
  border: 1px solid rgba(9, 9, 9, 0.1);
  padding: 0;
  margin: 0 12px 0 12px;
`;

export const ProductSubTotal = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const IconDelete = styled(Icon).attrs({
  name: 'delete',
  size: 24,
  color: '#7159c1',
})``;

export const Button = styled.TouchableOpacity`
  margin-left: 18px;
  /* position: absolute;
  top: 32px;
  right: -12px; */
`;

export const EmptyCart = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextEmptyCart = styled.Text`
  text-align: center;
  color: #999;
  font-size: 18px;
  margin-top: 4px;
`;

export const CartTotal = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  margin-top: 12px;
`;
export const FinishButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 4px 8px;
  border-radius: 4px;
`;
export const TextTotal = styled.Text`
  margin-left: auto;
  margin-right: 4px;
  color: #666;
  font-weight: bold;
`;
export const TextTotalPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
