import styles from '../css/Transaction.module.css';
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
  {items.map(element => (
   <tr key= {element.id} className = {styles.transactionTbodyTr}>
   <td className= {styles.transactionTd}>{element.type}</td>
   <td className= {styles.transactionTd}>{element.amount}</td>
   <td className= {styles.transactionTd}>{element.currency}</td>
 </tr>
  ))
}
  </tbody>
</table>
)
}