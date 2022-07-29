import styles from './Transaction.module.css';
import PropTypes from 'prop-types';
export const Transaction = ({items}) => {
return (
    <table className= {styles.transactionHistory}>
  <thead className= {styles.transactiontTead}>
    <tr className= {styles.transactiontTeadTr}>
      <th className= {styles.itemTh}>Type</th>
      <th className= {styles.itemTh}>Amount</th>
      <th className= {styles.itemTh}>Currency</th>
    </tr>
  </thead>
  <tbody className={styles.transactionTbody}>
  {items.map(({id,type,amount,currency}) => (
   <tr key= {id} className = {styles.transactionTbodyTr}>
   <td className= {styles.transactionTd}>{type}</td>
   <td className= {styles.transactionTd}>{amount}</td>
   <td className= {styles.transactionTd}>{currency}</td>
 </tr>
  ))
}
  </tbody>
</table>
)
}
Transaction.propTypes = {
  items: PropTypes.array
}