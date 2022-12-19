import PropTypes from 'prop-types';
import { Section, List, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => (
  <Section>
    {title && <h2>{title}</h2>}
    <List>
      {stats.map(({ id, label, percentage }) => (
        <Item key={id}>
          <span> {label}</span>
          <span> {percentage}%</span>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
