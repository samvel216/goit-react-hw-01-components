import styles from '../css/Transaction.module.css';
export const Transaction = ({items}) => {
return (
    <table class= {styles.transactionHistory}>
  <thead class= {styles.transactiontTead}>
    <tr class= {styles.transactiontTeadTr}>
      <th class= {styles.itemTh}>Type</th>
      <th class= {styles.itemTh}>Amount</th>
      <th class= {styles.itemTh}>Currency</th>
    </tr>
  </thead>
  <tbody class={styles.transactionTbody}>
  {items.map(element => (
   <tr key= {element.id} class = {styles.transactionTbodyTr}>
   <td class= {styles.transactionTd}>{element.type}</td>
   <td class= {styles.transactionTd}>{element.amount}</td>
   <td class= {styles.transactionTd}>{element.currency}</td>
 </tr>
  ))
}
  </tbody>
</table>
)
}