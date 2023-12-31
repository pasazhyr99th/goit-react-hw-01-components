import PropTypes from 'prop-types';
import {
  StatisticsStyle,
  StatisticsTitle,
  StatList,
  StatListItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <StatisticsStyle>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatListItem>
        ))}
      </StatList>
    </StatisticsStyle>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
