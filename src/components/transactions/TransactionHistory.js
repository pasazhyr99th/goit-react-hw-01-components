import PropTypes from 'prop-types';
import {
  TxHistoryTable,
  TableHead,
  TableHeadItem,
  TableBody,
  TableBodyItem,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TxHistoryTable>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <tr key={item.id}>
            <TableBodyItem>{item.type}</TableBodyItem>
            <TableBodyItem>{item.amount}</TableBodyItem>
            <TableBodyItem>{item.currency}</TableBodyItem>
          </tr>
        ))}
      </TableBody>
    </TxHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};