import TxListItem from './TransactionListItem';
import {
  TxHistoryTable,
  TableHead,
  TableHeadItem,
  TableBody,
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
            <TxListItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </TableBody>
    </TxHistoryTable>
  );
}
