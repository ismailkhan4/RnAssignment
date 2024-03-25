import styled from 'styled-components/native';

interface CardImageProps {
  type?: string;
}

export const CardImage = styled.Image<CardImageProps>`
  width: ${props => (props?.type === 'light' ? '63px' : '26px')};
  height: ${props => (props?.type === 'light' ? '55.88px' : '41.62px')};
`;
export const FilterImage = styled.Image`
  width: 24.44px;
  height: 20px;
`;
export const BGImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  position: fixed;
  z-index: -10;
  top: 15%;
  bottom: 10px;
  width: 348px;
  height: 309px;
`;
export const HeaderImage = styled.Image`
  height: 20px;
  width: 20px;
`;
export const SearchImage = styled.Image`
  width: 17.43px;
  height: 20px;
`;
export const ListImage = styled.Image`
  width: 48px;
  height: 48px;
`;
export const TaskImage = styled.Image`
  width: 16px;
  height: 16px;
`;
export const ArrowImage = styled.Image`
  width: 24px;
  height: 20px;
  margin-top: 10px;
`;
