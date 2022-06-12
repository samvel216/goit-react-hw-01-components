import styles from '../css/Statistics.module.css';
export const Statistics = ({title, stats}) => {
  console.log(title);
  console.log(typeof title);
return (
<section className= {styles.statistics}>
  <div className = {styles.listContainer}>
    {title !== undefined && (
        <h2 className={styles.titl}>{title}</h2>
    )}
  <ul className= {styles.statList}>
  
  {stats.map(stat => 
  (<li className={styles.item} key= {stat.id}>
   <span className={styles.label}>{stat.label}</span>
   <span className={styles.percentage}>{stat.percentage}</span>
 </li>
  ))}
  </ul>
  </div>
</section>
)
}

