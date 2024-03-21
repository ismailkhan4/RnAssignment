import styled from 'styled-components/native';

export const ListButton = styled.TouchableOpacity`
  z-index: 100;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 14px;
  padding: 12px 7px;
  border-bottom-width: 0.5px;
  border-color: #1a1c1e;
`;

export const ToggleButtonView = styled.TouchableOpacity<{ isToggled: boolean }>`
    width: 57px;
    height: 29px;
    border-radius: 15px;
    justify-content: center;
    background-color: ${(props) => (props.isToggled ? '#72CEBC' : '#72777F')};
`;
