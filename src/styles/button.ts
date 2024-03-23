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

export const ToggleButtonView = styled.TouchableOpacity<{isToggled: boolean}>`
  width: 51px;
  height: 32px;
  border-radius: 16px;
  justify-content: center;
  background-color: ${props => (props.isToggled ? '#72CEBC' : '#72777F')};
`;
export const PaginationButton = styled.TouchableOpacity<{disabled: boolean}>`
  background-color: ${props => (props.disabled ? '#72777F' : '#72CEBC')};
  width: 30%;
  padding: 5px 0;
  align-self: center;
  margin: 10px auto;
  border: 2px solid black;
`;
