import styled from '@emotion/styled';

export const StatisticsStyle = styled.section`
  background-color: white;
  padding: 10px;
  margin-top: 25px;
  border-radius: 20px;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 30px;
  text-align: center;

  font-size: 35px;
`;

export const StatList = styled.ul`
  display: flex;
  border-top: 1px solid black;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const StatLabel = styled.span`
  font-size: 23px;
`;

export const StatPercentage = styled.span`
  font-size: 30px;
  font-weight: 500;
`;
