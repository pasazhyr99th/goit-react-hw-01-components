import PropTypes from 'prop-types';
import { TableBodyItem } from './TransactionHistory.styled';

export default function TxListItem({ type, amount, currency }) {
  return (
    <>
      <TableBodyItem>{type}</TableBodyItem>
      <TableBodyItem>{amount}</TableBodyItem>
      <TableBodyItem>{currency}</TableBodyItem>
    </>
  );
}

TxListItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
