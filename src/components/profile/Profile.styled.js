import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-top: 25px;

  border-radius: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 270px;
  margin-bottom: 20px;
  background-color: grey;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Tag = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  color: #454545;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
  color: #454545;
`;

export const Stats = styled.ul`
  display: flex;
  border: 2px solid;
  border-radius: 10px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4d4d4;
  padding: 20px;
`;

export const Label = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
  color: #454545;
`;

export const Quantity = styled.span`
  font-size: 25px;
  font-weight: 700;
`;
