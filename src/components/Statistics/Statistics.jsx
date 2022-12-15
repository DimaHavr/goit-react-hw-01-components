import PropTypes from 'prop-types';
import { Section, List, Item } from './Statistics.styled';

const Statistics = ({ title, stats }) => (
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
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
