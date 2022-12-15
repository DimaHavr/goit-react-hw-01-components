import PropTypes from 'prop-types';
import { Container, DescriptionBox, ProfileAvatar, ProfileText, StatsList, StatsItem} from './Profile.styled';

const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => (
  <Container>
    <DescriptionBox>
      <ProfileAvatar src={avatar} alt="User avatar"/>
      <ProfileText>{username}</ProfileText>
      <ProfileText>@{tag}</ProfileText>
      <ProfileText>{location}</ProfileText>
    </DescriptionBox>

    <StatsList>
      <StatsItem>
        <span>Followers</span>
        <span> {followers}</span>
      </StatsItem>
      <StatsItem>
        <span >Views</span>
        <span> {views}</span>
      </StatsItem>
      <StatsItem>
        <span >Likes</span>
        <span> {likes}</span>
      </StatsItem>
    </StatsList>
  
 </Container>
);

Profile.propTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

export default Profile;
