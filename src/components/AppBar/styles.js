import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 4px 10px 0 10px;
`;

export const Cart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-right: 2px;
`;
