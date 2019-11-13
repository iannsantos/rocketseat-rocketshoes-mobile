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
  margin-top: 4px;
  align-items: center;
  /* border-bottom-width: 1px;
  border-bottom-color: rgba(9, 9, 9, 0.1);
  margin-bottom: 6px; */
`;

export const Column = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 4px;
  margin: 0 6px;
  flex: 1;
`;

export const ProductInformations = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
`;

export const Amount = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
  color: #666;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  margin: 4px 0;
  padding: 4px;
  background: rgba(9, 9, 9, 0.1);
  border-radius: 4px;
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

export const ProductPrice = styled.Text`
  color: #777;
  font-weight: bold;
`;

export const ProductSubTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 2px;
`;

export const IconDelete = styled(Icon).attrs({
  name: 'delete',
  size: 24,
  color: '#7159c1',
})``;

export const Button = styled.TouchableOpacity`
  margin-left: 18px;
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
  flex-direction: column;
  align-items: center;

  width: 95%;
  border-radius: 4px;
  background: #fff;
  margin-top: 12px;
  padding: 8px 0;
`;
export const FinishButton = styled.TouchableOpacity`
  background: #7159c1;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 10px;
  width: 95%;
`;
export const TextTotal = styled.Text`
  color: #666;
  font-weight: bold;
`;
export const TextTotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
