import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import {
  DescriptionBox,
  ProfileAvatar,
  ProfileText,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <Box
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    fontWeight="600"
    padding="30px"
  >
    <DescriptionBox>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <ProfileText>{username}</ProfileText>
      <ProfileText>@{tag}</ProfileText>
      <ProfileText>{location}</ProfileText>
    </DescriptionBox>

    <StatsList>
      <StatsItem>
        <StatsItem>Followers</StatsItem>
        <StatsItem> {followers}</StatsItem>
      </StatsItem>
      <StatsItem>
        <StatsItem>Views</StatsItem>
        <StatsItem> {views}</StatsItem>
      </StatsItem>
      <StatsItem>
        <StatsItem>Likes</StatsItem>
        <StatsItem> {likes}</StatsItem>
      </StatsItem>
    </StatsList>
  </Box>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
