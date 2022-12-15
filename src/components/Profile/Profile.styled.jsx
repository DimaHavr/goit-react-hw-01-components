import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  padding: 30px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.19);
  padding: 50px;
`;

export const ProfileAvatar = styled.img`
  max-width: 100px;
  border-radius: 100%;
`;

export const ProfileText = styled.p`
`;

export const StatsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 15px 36px;
  background-color: rgba(0, 0, 0, 0.582);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
