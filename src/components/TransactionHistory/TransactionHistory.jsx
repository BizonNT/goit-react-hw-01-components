import TransactionItem from './TransactionItem/TransactionItem';

import css from './transactionhistory.module.css';

const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, ...other }) => (
    <TransactionItem key={id} {...other} />
  ));
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.head}>
          <th className={css.headText}>Type</th>
          <th className={css.headText}>Amount</th>
          <th className={css.headText}>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;
