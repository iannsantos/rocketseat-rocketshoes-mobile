import styled from 'styled-components/native';
import { darken } from 'polished';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  /* flex-direction: row; */
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 10px 10px 10px;
  background: #7159c1;
  width: 100%;
  margin-left: auto;
`;

export const Cart = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 190px;
  height: 24px;
`;

export const IconCart = styled(Icon).attrs({
  name: 'shopping-cart',
  size: 25,
  color: '#fff',
})``;

export const Text = styled.Text`
  background: ${darken(0.1, '#7159c1')};
  min-width: 20px;
  min-height: 20px;
  text-align: center;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  margin-right: 2px;
  position: absolute;
  right: -10px;
  bottom: 10px;
  overflow: hidden;
  z-index: 1;
`;
