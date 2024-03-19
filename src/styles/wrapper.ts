import styled from 'styled-components/native';

interface CardViewProps {
  type?: string;
}

export const HeaderView = styled.SafeAreaView`
  background-color: #182545;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 44px 14px 20px;
`;
export const ImageView = styled.View`
  background-color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;
export const RoutineView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 9px;
  border-bottomwidth: 1px;
  border-color: #00000025;
`;
export const CardView = styled.View<CardViewProps>`
  background-color: ${props =>
    props?.type === 'light' ? '#CFE4FF' : '#103C58'};
  padding: 10px;
  margin: 10px;
  width: 100%;
  align-self: center;
  border-radius: 12px;
`;
