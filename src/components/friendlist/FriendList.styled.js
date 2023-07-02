import styled from '@emotion/styled';

export const FriendListStyle = styled.ul`
  margin-top: 25px;
`;

export const FriendListItemStyle = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  padding: 10px 100px 10px 15px;
  background-color: white;
  border-radius: 10px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline === true) {
      return 'green';
    }
    return 'red';
  }};
`;

export const FriendAvatar = styled.img`
  background-color: black;
  border-radius: 10px;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;
