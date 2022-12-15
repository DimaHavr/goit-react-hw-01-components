import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 0;
  background-color: antiquewhite;
  padding: 5px 25px;
`;

export const StatusOn = styled.span`
  background-color: aquamarine;
  padding: 5px;
`;

export const StatusOff = styled.span`
  background-color: crimson;
  padding: 5px;
`;
