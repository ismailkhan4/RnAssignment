import styled from 'styled-components/native';

interface CardBodyProps {
  type?: string;
}

export const HeaderText = styled.Text`
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
`;
export const CardText = styled.Text`
  font-weight: 500;
  color: #1a1c1e;
  font-size: 16px;
  text-align: center;
`;
export const CardBodyText = styled.Text<CardBodyProps>`
  color: ${props => (props?.type === 'light' ? '#000000' : '#FFFFFF')};
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 3px;
`;
