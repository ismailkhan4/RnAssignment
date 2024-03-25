import styled from 'styled-components/native';

interface CardViewProps {
  type?: string;
}
interface ToggleButtonProps {
  isToggled?: boolean;
}

export const Wrapper = styled.View``;
export const MainView = styled.View`
  background-color: #ffffff;
  flex: 1;
`;
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
  border-bottom-width: 1px;
  border-color: #00000025;
`;
export const CardSection = styled.View`
  padding: 10px;
  width: 50%;
`;
export const CardBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
export const SearchView = styled.View`
  position: relative;
  flex-direction: row;
  margin: 12px;
  justify-content: center;
  align-items: center;
`;
export const SearchBarView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid black;
`;
export const SearchIconView = styled.View`
  background-color: #49b0ab;
  justify-content: center;
  align-items: center;
  padding-horizontal: 12.2px;
  padding-vertical: 14px;
`;
export const FilterView = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid black;
  height: 40px;
  width: 40px;
  margin-left: 13px;
`;
export const ListView = styled.FlatList``;
export const ItemView = styled.View`
  flex: 1;
  margin-horizontal: 7px;
`;
export const TaskView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Toggler = styled.View<ToggleButtonProps>`
  width: 28px;
  height: 28px;
  border-radius: 15px;
  background-color: ${props => (props?.isToggled ? '#fff' : '#FFFFFF')};
  position: absolute;
  left: ${props => (props?.isToggled ? '21px' : '4px')};
`;
export const PaginationView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;
export const SwipeView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: red;
  padding-horizontal: 10px;
`;
