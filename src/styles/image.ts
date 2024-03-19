import styled from 'styled-components/native';

interface CardImageProps {
  type?: string;
}

export const CardImage = styled.Image<CardImageProps>`
  width: ${props => (props?.type === 'light' ? '63px' : '26px')};
  height: ${props => (props?.type === 'light' ? '55.88px' : '41.62px')};
`;
